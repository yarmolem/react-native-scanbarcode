import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Divider = ({style}: Props) => {
  return <View style={[styles.divider, style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '90%',
    height: 2,
    alignSelf: 'center',
    backgroundColor: '#e2e2e2',
  },
});
