import {Dimensions} from 'react-native';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import Fonts from '../constants/fonts';
import colors from '../constants/colors';

export const commonSty = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.421)',
    alignSelf: 'center',
    width: WIDTH,
  },
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  mainBgWhite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteLight,
  },
  mainCenterNoJustify: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(43),
    backgroundColor: '#ffff',
  },
  mainCenter: {
    flex: 1,
    alignItems: 'center',
  },
  authTitle: {
    fontSize: moderateScale(24),
    textAlign: 'center',
  },
  15: {
    fontFamily: Fonts.primaryBold,
    fontSize: moderateScale(15),
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleTxt: {
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  rowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mediumText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.primaryBold,
  },
  size: val => ({
    height: moderateScale(val),
    width: moderateScale(val),
  }),
  HW: {
    height: HEIGHT,
    width: WIDTH,
  },
});
