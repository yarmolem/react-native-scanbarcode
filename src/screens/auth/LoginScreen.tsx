import React from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Link from '../../components/shared/Link';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import Heading from '../../components/shared/Heading';
import InputSecure from '../../components/shared/InputSecure';

import useForm, {FormError} from '../../hooks/useForm';
import {useLoginMutation} from '../../generated/graphql';

import {colors} from '../../styles/theme';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/slices/authSlice';

const LoginScreen = () => {
  const dispath = useDispatch();

  const [login, {loading}] = useLoginMutation({
    onError: err => console.log({err}),
  });

  const {values, inputProps, onSubmit} = useForm({
    initialValues: {
      email: 'jose.jollja@gmail.com',
      password: 'O5iyXS7TPpfKbHME',
    },
    validate: state => {
      const errors: FormError<typeof state> = {};

      if (!isEmail(state.email)) {
        errors.email = 'Debe ingresar un email valido.';
      }

      if (isEmpty(state.password)) {
        errors.password = 'Este campo es requerido.';
      }

      return errors;
    },
  });

  const handleSubmit = async () => {
    const res = await login({variables: {input: values}});

    if (res.data?.Login?.apiToken) {
      const user = {
        email: res.data?.Login.email!,
        name: res.data?.Login.nombres!,
        token: res.data?.Login.apiToken!,
      };

      await AsyncStorage.setItem('@token', user.token);
      await AsyncStorage.setItem('@user', JSON.stringify(user));

      dispath(loginAction(user));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.center}>
        <View style={styles.container}>
          <Heading size="4xl" weight="Bold">
            Bienvenido
          </Heading>
          <Heading size="lg" weight="Light" style={styles.subheading}>
            Ingrese a su cuenta
          </Heading>

          <Input
            style={styles.input}
            placeholder="Correo"
            {...inputProps('email')}
          />
          <InputSecure
            style={styles.input}
            placeholder="Contraseña"
            {...inputProps('password')}
          />

          <Link>Olvido su contraseña?</Link>

          <Button loading={loading} onPress={onSubmit(handleSubmit)}>
            Ingresar
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {width: '80%'},
  input: {marginBottom: 24},
  subheading: {
    marginBottom: 58,
    fontWeight: '400',
    color: colors.gray,
  },
});
