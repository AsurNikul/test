import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import Fonts from '../../constants/Fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  btnStyle: {
    paddingVertical: verticalScale(10),
    width: '95%',
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    elevation: 3,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontFamily: Fonts.primaryMain,
    textAlign: 'center',
  },
});

export default styles;
