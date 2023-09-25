import React from 'react';
import {Text} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import colors from '../../constants/colors';

const Typography = ({txtStyle, title, color, size, mt, ...props}) => {
  const dynamicStyles = {
    color: color || colors.black,
    fontSize: size ? moderateScale(size) : moderateScale(18),
    marginTop: mt || 0,
  };

  return (
    <Text style={[dynamicStyles, txtStyle]} {...props}>
      {title}
    </Text>
  );
};

export default Typography;
