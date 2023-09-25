import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const PrimaryBtn = ({btnStyle, btnTitle, btnTextStyle, ...props}) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, btnStyle]} {...props}>
      <Text style={[styles.btnTextStyle, btnTextStyle]}> {btnTitle} </Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;
