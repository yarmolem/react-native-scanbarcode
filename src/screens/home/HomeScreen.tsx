import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';

import Icon from '../../components/shared/Icon';
import Heading from '../../components/shared/Heading';
import Paragraph from '../../components/shared/Paragraph';
import {AppStackParams} from '../../navigators/AppNavigator';

import {colors} from '../../styles/theme';
import {RootState} from '../../store';
import IconButton from '../../components/shared/IconButton';
import {logoutAction} from '../../store/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<AppStackParams, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.auth.user.name);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@token');
    dispatch(logoutAction());
  };

  return (
    <View style={styles.container}>
      <Heading size="4xl" weight="Bold">
        Hola, {name}!
      </Heading>
      <Heading size="lg" weight="Light">
        ¿Que deseas ver hoy?
      </Heading>

      <View style={styles.cards}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('ValidacionEntrada')}>
          <View style={styles.card}>
            <Paragraph size="lg" weight="Bold" style={styles.card_p}>
              Validacion de entrada
            </Paragraph>
            <Icon
              name="arrow-right"
              fill={colors.white}
              style={styles.card_svg}
            />
          </View>
        </TouchableNativeFeedback>
      </View>

      <IconButton
        name="logout"
        onPress={handleLogout}
        style={{marginTop: 'auto', marginLeft: 'auto'}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: colors.white,
  },
  cards: {
    marginTop: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: 12,
    height: 120,
    width: '48%',
    elevation: 4,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: colors.primary,
  },
  card_p: {
    color: colors.white,
    marginBottom: 12,
  },
  card_svg: {marginStart: 'auto', marginTop: 'auto'},
});
