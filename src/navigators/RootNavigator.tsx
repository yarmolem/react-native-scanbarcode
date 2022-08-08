import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/auth/LoginScreen';

import {User} from '../interface';
import {RootState} from '../store';
import {loginAction} from '../store/slices/authSlice';
import {ActivityIndicator, View} from 'react-native';

type RootStackParams = {
  App: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const dispath = useDispatch();
  const [hasValidateStorage, setHasValidateStorage] = useState(false);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const handleLoad = async () => {
    const user = await AsyncStorage.getItem('@user').then(res => {
      if (res) return JSON.parse(res) as User;
      return null;
    });

    if (user?.token) dispath(loginAction(user));

    setHasValidateStorage(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (!hasValidateStorage) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
