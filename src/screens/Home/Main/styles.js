import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {colors} from '../../../constants';
import {HEIGHT} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.silver,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
    height: verticalScale(100),
  },
  headerSearchSty: {
    borderRadius: 10,
    // padding: 10,
    width: '95%',
    fontSize: moderateScale(18),
    height: verticalScale(40),
  },
  90: {
    width: '90%',
  },
  flatContainer: {
    width: '100%',
    marginTop: verticalScale(20),
    height: HEIGHT,
  },
  imgSty: {
    height: verticalScale(80),
    width: '38%',
    borderRadius: 10,
    marginRight: 10,
  },
  subContainer: {
    width: '60%',
    alignItems: 'flex-start',
  },
  txtStyle: {
    fontWeight: 'bold',
  },
  sheetContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  sheetIcon: {
    height: 2.5,
    width: scale(50),
    color: colors.black,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 15,
  },
  sheetBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.421)',
  },
  sheetHeader: {
    textAlign: 'left',
    width: '75%',
  },
  LaunchItemModalContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
export default styles;
