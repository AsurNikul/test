import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {colors} from '../../../constants';

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: colors.white,
    marginBottom: 5,
    width: scale(176),
  },
  tabLabel: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});

export default styles;
