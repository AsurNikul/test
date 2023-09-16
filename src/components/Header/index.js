import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {commonSty} from '../../utils';

import Typography from '../Typo';

import styles from './styles';

const Header = ({titleSty, onMenuPress, imgSrc, title}) => {
  return (
    <View style={commonSty.rowCenter}>
      <TouchableOpacity onPress={onMenuPress}>
        <Image
          source={imgSrc}
          resizeMode="contain"
          style={commonSty.size(40)}
        />
      </TouchableOpacity>
      <Typography
        title={title}
        size={25}
        txtStyle={[styles.titleSty, titleSty]}
      />
    </View>
  );
};

export default Header;
