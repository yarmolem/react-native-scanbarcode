import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/shared/Button';

import Heading from '../../components/shared/Heading';
import Paragraph from '../../components/shared/Paragraph';
import {AppStackParams} from '../../navigators/AppNavigator';

import {colors} from '../../styles/theme';

type Props = NativeStackScreenProps<AppStackParams, 'InfoAsientoScreen'>;

const InfoAsientoScreen = ({route, navigation}: Props) => {
  const values = route.params;

  const bgStyle = getBg(values.estado);

  const handleUpdate = async () => {
    navigation.navigate('ValidacionEntrada');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Heading size="4xl" weight="Bold">
          Asiento
        </Heading>
        <Heading size="lg" weight="Light" style={styles.subheading}>
          Datos del asiento {values.asiento}
        </Heading>

        <View style={[styles.card, bgStyle.bg]}>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Nombres
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.nombres}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Apellidos
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.apellidos}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Tipo documento
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.tipoDocumento}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Numero documento
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.numDocumento}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Codigo
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.codigo}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Asiento
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.asiento}
            </Paragraph>
          </View>
          <View style={styles.card_row}>
            <Paragraph style={styles.card_p} weight="Bold">
              Estado
            </Paragraph>
            <Paragraph style={styles.card_p} weight="Bold">
              {values.estado}
            </Paragraph>
          </View>
        </View>

        <Button onPress={handleUpdate} disabled={values.estado !== 'Pendiente'}>
          Actualizar
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InfoAsientoScreen;

const getBg = (estado: string) => {
  const styles = StyleSheet.create({
    bg: {backgroundColor: estado === 'Pendiente' ? colors.green : colors.red},
  });

  return styles;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: colors.white,
  },
  subheading: {marginBottom: 58},
  card: {
    padding: 24,
    elevation: 4,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: 24,
  },
  card_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card_p: {color: colors.white},
});
