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

const Heading = ({
  children,
  size = 'md',
  weight = 'Medium',
  family = 'PlayfairDisplay',
  ...props
}: Props) => {
  return (
    <Text {...props} style={[genStyles({size, family, weight}), props.style]}>
      {children}
    </Text>
  );
};

export default Heading;

const genStyles = ({size, family, weight}: GenStylesProps) => {
  const styles = StyleSheet.create({
    main: {
      color: '#171717',
      fontSize: fontSize[size],
      fontFamily: `${family}-${weight}`,
    },
  });

  return styles.main;
};
