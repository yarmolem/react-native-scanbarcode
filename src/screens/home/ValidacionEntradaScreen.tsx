import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Input from '../../components/shared/Input';
import Select from '../../components/shared/Select';
import Button from '../../components/shared/Button';
import Heading from '../../components/shared/Heading';
import Divider from '../../components/shared/Divider';
import {AppStackParams} from '../../navigators/AppNavigator';

import useForm, {FormError} from '../../hooks/useForm';
import {colors} from '../../styles/theme';
import {useValidacionEntradaMutation} from '../../generated/graphql';
import isEmpty from 'validator/lib/isEmpty';

type Props = NativeStackScreenProps<AppStackParams, 'ValidacionEntrada'>;

const ValidacionEntradaScreen = ({route, navigation}: Props) => {
  const [validar, {loading}] = useValidacionEntradaMutation({
    onError: err => {
      console.log({err});
      ToastAndroid.show((err.graphQLErrors[0] as any).debugMessage, 3000);
    },
  });

  const {values, errors, inputProps, onSubmit, setField, clear} = useForm({
    initialValues: {
      numDocumento: '',
      tipoDocumento: '',
      fecha: '2022-07-29',
      constante: 'LaEsperanza2405',
    },
    validate: state => {
      const newErrors: FormError<typeof state> = {};

      if (isEmpty(state.numDocumento)) {
        newErrors.numDocumento = 'Este campo es requerido.';
      }

      if (isEmpty(state.tipoDocumento)) {
        newErrors.tipoDocumento = 'Este campo es requerido.';
      }

      return newErrors;
    },
  });

  const handleSubmit = async () => {
    console.log({values});
    const res = await validar({variables: values});

    if (res.data?.ValidacionEntrada) {
      clear();
      navigation.navigate('InfoAsientoScreen', res.data?.ValidacionEntrada);
    }
  };

  useEffect(() => {
    if (typeof route.params?.value === 'string') {
      if (route.params.value.length !== 8) {
        setField('numDocumento', route.params.value);
      }
    }
  }, [route.params?.value]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Heading size="4xl" weight="Bold">
          Validación
        </Heading>
        <Heading size="lg" weight="Light" style={styles.subheading}>
          Por favor ingrese los datos de su documento.
        </Heading>

        <View>
          <Select
            style={styles.input}
            error={errors.tipoDocumento}
            value={values.tipoDocumento}
            onValueChange={value => setField('tipoDocumento', value)}
            placeholder={{label: 'Selecciona documento', value: ''}}
            items={[
              {label: 'DNI', value: 'DNI'},
              {label: 'Pasaporte', value: 'PASAPORTE'},
              {label: 'Carnet de extranjeria', value: 'CE'},
            ]}
          />

          <Input
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Numero de documento"
            {...inputProps('numDocumento')}
          />

          <Button loading={loading} onPress={onSubmit(handleSubmit)}>
            Validar
          </Button>

          <Divider style={styles.divider} />

          <Button
            icon="qrcode"
            variant="outline"
            onPress={() => {
              navigation.navigate('Camera', {
                from: 'ValidacionEntrada',
              });
            }}>
            Scannear QR
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ValidacionEntradaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: colors.white,
  },
  input: {marginBottom: 24},
  divider: {marginVertical: 18},
  subheading: {marginBottom: 58},
});
