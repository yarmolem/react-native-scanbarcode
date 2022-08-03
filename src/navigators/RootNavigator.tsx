import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/auth/LoginScreen';

import {User} from '../interface';
import {RootState} from '../store';
import {loginAction} from '../store/slices/authSlice';

type RootStackParams = {
  App: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const dispath = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const handleLoad = async () => {
    const user = await AsyncStorage.getItem('@user').then(res => {
      if (res) return JSON.parse(res) as User;
      return null;
    });

    if (user?.token) dispath(loginAction(user));
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
