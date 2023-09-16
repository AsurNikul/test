import React from 'react';
import {Alert, Image, Pressable, View} from 'react-native';

import Typography from '../Typo';

import {commonSty} from '../../utils';

import {Images, colors} from '../../constants';

import styles from './styles';

const ServiceItem = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <Typography
        title={`Main Service ${index + 1} :`}
        txtStyle={styles.title}
      />
      <View style={styles.subContainer}>
        <View style={[commonSty.rowCenter, {justifyContent: 'space-between'}]}>
          <Image
            source={{uri: item.image}}
            resizeMode="stretch"
            style={styles.imgSty}
          />
          <View style={{flex: 0.8}}>
            <Typography
              title={`Service ${index + 1}`}
              txtStyle={styles.subContainerTitle}
            />
            <Typography
              title={`Kr ${item.price},-`}
              color={colors.silver}
              size={16}
            />
          </View>
          <Pressable onPress={() => Alert.alert(item.description)}>
            <Image
              source={Images.info}
              resizeMode="contain"
              style={[commonSty.size(18), {tintColor: colors.silver}]}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;
