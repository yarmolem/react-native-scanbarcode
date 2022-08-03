import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {TextInput, StyleSheet, TextInputProps, View} from 'react-native';
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {colors, fontSize} from '../../../styles/theme';
import Paragraph from '../Paragraph';

interface Props extends TextInputProps {
  icon?: ReactNode;
  error?: string | undefined;
}

const label = {
  active: {top: 4, left: 12},
  inactive: {top: 18, left: 16},
};

const Input = ({placeholder, error, ...props}: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [innerValue, setInnerValue] = useState('');

  const top = useSharedValue(label.inactive.top);
  const left = useSharedValue(label.inactive.top);

  const setStateLabel = useCallback(
    (state: 'inactive' | 'active') => {
      top.value = label[state].top;
      left.value = label[state].left;
    },
    [top.value, left.value],
  );
  const labelAnimatedStyles = useAnimatedStyle(() => {
    const options = {
      duration: 300,
      easing: Easing.out(Easing.exp),
    };

    return {
      top: withTiming(top.value, options),
      left: withTiming(left.value, options),
    };
  });

  useEffect(() => {
    const valueEmpty =
      typeof props.value === 'string'
        ? props.value?.trim().length === 0
        : innerValue.trim().length === 0;

    const state = !isFocus && valueEmpty ? 'inactive' : 'active';

    setStateLabel(state);
  }, [isFocus, props.value]);

  return (
    <View style={props.style}>
      <View style={[styles.container, error ? styles.invalid : null]}>
        <Animated.Text style={[styles.label, labelAnimatedStyles]}>
          {placeholder}
        </Animated.Text>
        <TextInput
          {...props}
          style={styles.input}
          value={props.value ?? innerValue}
          onChangeText={v => {
            if (typeof props?.value !== 'string') {
              setInnerValue(v);
            } else {
              props.onChangeText?.(v);
            }
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <View>{props.icon}</View>
      </View>
      {error && (
        <Paragraph style={{color: colors.red}} size="sm">
          {error}
        </Paragraph>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 60,
    elevation: 1,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    color: '#1A1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderColor: 'transparent',
  },
  label: {
    position: 'absolute',
    fontSize: fontSize.md,
    fontFamily: 'Karla-Medium',
  },
  invalid: {borderColor: colors.red},
  input: {paddingTop: 24, color: colors.black, fontSize: fontSize.lg, flex: 1},
});
