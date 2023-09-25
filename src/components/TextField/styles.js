import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Fonts from '../../constants/fonts';
import colors from '../../constants/colors';

import {HEIGHT} from '../../utils';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '95%',
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(13),
    width: '95%',
    // fontFamily: Fonts.primaryMedium,
    marginBottom: HEIGHT * 0.005,
    alignSelf: 'center',
  },
  textInputStyle: {
    paddingLeft: 15,
    color: colors.black,
    fontSize: moderateScale(14),
    flex: 1,
    fontFamily: Fonts.primaryRegular,
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginLeft: 12,
  },
  RightIconStyle: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
});

export default styles;
