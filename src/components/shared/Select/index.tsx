import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';

interface Props extends Omit<PickerSelectProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

const Select = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <RNPickerSelect
        {...props}
        style={{inputAndroid: {height: 60}, placeholder: {color: '#1A1E1E'}}}
      />
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
    backgroundColor: '#F9FAFB',
  },
});
