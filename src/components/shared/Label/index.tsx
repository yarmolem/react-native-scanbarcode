import {Text, TextInputProps, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/theme';

interface Props extends TextInputProps {}

const Label = (props: Props) => {
  return (
    <Text {...props} style={[styles.label, props.style]}>
      {props.children}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    color: colors.gray,
    textTransform: 'uppercase',
  },
});
