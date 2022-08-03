import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native';

import Icon, {IconName} from '../Icon';
import {colors} from '../../../styles/theme';

interface Props extends TouchableNativeFeedbackProps {
  name: IconName;
  style?: StyleProp<ViewStyle>;
}

const IconButton = ({name, ...props}: Props) => {
  return (
    <TouchableNativeFeedback {...props}>
      <View style={[styles.btn, props.style]}>
        <Icon name={name} fill={colors.primary} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
