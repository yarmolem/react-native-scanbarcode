import React, {useState} from 'react';
import {TextInputProps} from 'react-native';

import Input from '../Input';
import IconButton from '../IconButton';

interface Props extends TextInputProps {}

const InputSecure = (props: Props) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      {...props}
      secureTextEntry={!show}
      icon={
        <IconButton
          name={show ? 'eye-slash' : 'eye'}
          onPress={() => setShow(prev => !prev)}
        />
      }
    />
  );
};

export default InputSecure;
