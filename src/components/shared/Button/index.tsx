import React from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  ActivityIndicator,
} from 'react-native';
import {colors, fontSize} from '../../../styles/theme';
import Icon, {IconName} from '../Icon';

interface Props extends TouchableNativeFeedbackProps {
  icon?: IconName;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: 'solid' | 'outline' | 'ghost';
}

const Button = ({
  icon,
  loading,
  children,
  variant = 'solid',
  ...props
}: Props) => {
  return (
    <TouchableNativeFeedback {...props} disabled={props.disabled && loading}>
      <View
        style={[
          styles.btn,
          styles[variant],
          loading ? styles.disabled : null,
          props.disabled ? styles.disabled : null,
          props.style,
        ]}>
        {!loading && icon && (
          <Icon
            name={icon}
            style={styles.icon}
            fill={variant === 'solid' ? colors.white : colors.primary}
          />
        )}

        {loading && (
          <ActivityIndicator
            style={styles.icon}
            color={variant === 'solid' ? colors.white : colors.primary}
          />
        )}
        <Text style={[styles.btn_text, styles[`${variant}_text`]]}>
          {children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  solid: {
    elevation: 4,
    backgroundColor: colors.primary,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  ghost: {},
  btn_text: {
    letterSpacing: 0.5,
    textAlign: 'center',
    fontSize: fontSize.lg,
    fontFamily: 'Karla-Bold',
  },
  solid_text: {
    color: colors.white,
  },
  outline_text: {
    color: colors.primary,
  },
  ghost_text: {
    color: colors.white,
  },
  icon: {marginRight: 24},
  disabled: {backgroundColor: colors.gray},
});
