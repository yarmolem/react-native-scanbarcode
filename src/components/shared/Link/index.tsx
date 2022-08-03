import {Text, Pressable, StyleSheet, PressableProps} from 'react-native';
import React from 'react';

import {fontSize} from '../../../styles/theme';

interface Props extends PressableProps {}

const Link = ({children, ...props}: Props) => {
  return (
    <Pressable {...props}>
      <Text style={styles.link}>{children}</Text>
    </Pressable>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    marginBottom: 24,
    marginStart: 'auto',
    fontSize: fontSize.lg,
    fontFamily: 'Karla-Bold',
  },
});
