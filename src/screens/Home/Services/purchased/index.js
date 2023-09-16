import React from 'react';
import {FlatList, ToastAndroid, View} from 'react-native';

import {HEIGHT, commonSty} from '../../../../utils';

import HOC from '../../../../components/HOC';
import ServiceItem from '../../../../components/serviceItem';

import styles from './styles';
import {colors} from '../../../../constants';
import Typography from '../../../../components/Typo';

const Purchased = props => {
  const {service} = props;
  let total_cost = 0;

  return (
    <View style={commonSty.mainCenterNoJustify}>
      <View style={styles.mainContainer}>
        <FlatList
          data={service}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{paddingBottom: 40}}
          renderItem={({item, index}) => {
            return <ServiceItem item={item} index={index} />;
          }}
        />
        <View
          style={{
            backgroundColor: colors.black,
            paddingVertical: 20,
            height: HEIGHT / 1.85,
          }}>
          <View>
            {service.map((item, index) => {
              total_cost = total_cost + Math.round(item.price);
              return (
                <View
                  style={[
                    commonSty.rowBet,
                    {
                      width: '84%',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginBottom: 10,
                    },
                  ]}>
                  <Typography
                    title={`Service ${index + 1}`}
                    color={colors.white}
                    size={16}
                  />
                  <Typography
                    title={`Kr ${item.price},-`}
                    color={colors.white}
                    size={16}
                  />
                </View>
              );
            })}
          </View>
          <View
            style={{
              backgroundColor: colors.silver,
              height: 1.5,
              width: '84%',
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <View
            style={[
              commonSty.rowBet,
              {
                width: '84%',
                alignItems: 'center',
                alignSelf: 'center',
              },
            ]}>
            <Typography
              title={'Total Costings'}
              size={20}
              color={colors.darkYellow}
            />
            <Typography title={`Kr ${total_cost},-`} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HOC(Purchased);
