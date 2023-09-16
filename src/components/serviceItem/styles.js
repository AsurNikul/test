import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  title: {
    marginBottom: 10,
    fontWeight: '500',
  },
  subContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.silver,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  imgSty: {
    height: 75,
    width: 80,
    borderRadius: 7,
  },
  subContainerTitle: {
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default styles;
