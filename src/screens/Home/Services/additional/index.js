import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import HOC from '../../../../components/HOC';
import ServiceItem from '../../../../components/serviceItem';

import {commonSty} from '../../../../utils';

import styles from './styles';

const Additional = props => {
  const {addService} = props;

  return (
    <View style={commonSty.mainCenterNoJustify}>
      <View style={[styles.mainContainer]}>
        <FlatList
          data={addService}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          contentContainerStyle={styles.container}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return <ServiceItem item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default HOC(Additional);
