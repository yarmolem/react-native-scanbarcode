import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextInputProps} from 'react-native';

import {Family, fontSize, Spacing, Weight} from '../../../styles/theme';

interface Props extends TextInputProps {
  size?: Spacing;
  family?: Family;
  weight?: Weight;
  children?: ReactNode;
}

interface GenStylesProps {
  size: Spacing;
  family: Family;
  weight: Weight;
}

const Paragraph = ({
  children,
  size = 'md',
  family = 'Karla',
  weight = 'Regular',
  ...props
}: Props) => {
  return (
    <Text {...props} style={[genStyles({size, family, weight}), props.style]}>
      {children}
    </Text>
  );
};

export default Paragraph;

const genStyles = ({size, family, weight}: GenStylesProps) => {
  const styles = StyleSheet.create({
    main: {
      color: '#121515',
      fontSize: fontSize[size],
      fontFamily: `${family}-${weight}`,
    },
  });

  return styles.main;
};
