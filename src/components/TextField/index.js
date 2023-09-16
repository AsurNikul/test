import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import Fonts from '../../constants/Fonts';
import colors from '../../constants/colors';

import Typography from '../Typo';

import styles from './styles';

const TextField = ({
  textInputStyle,
  iconStyle,
  inputContainerStyle,
  RightIconStyle,
  rightIconPress,
  rightIcon,
  title,
  titleStyle,
  tit,
  leftIcon,
  mainContainer,
  errTitle,
  errors,
  touched,
  ...props
}) => {
  return (
    <View style={[{marginTop: verticalScale(13)}, mainContainer]}>
      {title && (
        <Typography title={title} txtStyle={[styles.titleStyle, titleStyle]} />
      )}
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.iconStyle, iconStyle]}
            resizeMode="cover"
          />
        )}
        <TextInput
          style={[styles.textInputStyle, textInputStyle]}
          placeholderTextColor={colors.black}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.RightIconStyle, RightIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {errors && touched && (
        <Typography
          title={errTitle}
          txtStyle={{
            color: colors.red,
            fontSize: RFValue(12),
            fontFamily: Fonts.primaryMedium,
            marginTop: 3,
            width: '95%',
            alignSelf: 'center',
          }}
        />
      )}
    </View>
  );
};

export default TextField;
