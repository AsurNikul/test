import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const PrimaryBtn = ({btnStyle, btnTitle, btnTextStyle, ...props}) => {
  return (
    <Pressable style={[styles.btnStyle, btnStyle]} {...props}>
      <Text style={[styles.btnTextStyle, btnTextStyle]}> {btnTitle} </Text>
    </Pressable>
  );
};

export default PrimaryBtn;
