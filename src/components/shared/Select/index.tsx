import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import {colors} from '../../../styles/theme';
import Paragraph from '../Paragraph';

interface Props extends Omit<PickerSelectProps, 'style'> {
  error?: string;
  style?: StyleProp<ViewStyle>;
}

const Select = ({error, ...props}: Props) => {
  return (
    <View style={props.style}>
      <View style={[styles.container, error ? styles.invalid : null]}>
        <RNPickerSelect
          {...props}
          style={{inputAndroid: {height: 60}, placeholder: {color: '#1A1E1E'}}}
        />
      </View>
      {error && (
        <Paragraph style={{color: colors.red}} size="sm">
          {error}
        </Paragraph>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    height: 60,
    elevation: 1,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#F9FAFB',
  },
  invalid: {borderColor: colors.red},
});
