import {View} from 'react-native';
import React, {useState} from 'react';
import {verticalScale} from 'react-native-size-matters';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from 'react-native-tab-view';

import Header from '../../../components/Header';

import Purchased from '../Services/purchased';
import Additional from '../Services/additional';

import {Images, colors} from '../../../constants';

import {HEIGHT, WIDTH, commonSty} from '../../../utils';

import styles from './styles';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'PURCHASE', title: 'PURCHASED SERVICES'},
    {key: 'ADDITIONAL', title: 'ADDITIONAL SERVICES'},
  ]);

  const renderScene = SceneMap({
    PURCHASE: Purchased,
    ADDITIONAL: Additional,
  });

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={colors.black}
        navigationState={{index, routes}}
        inactiveColor={colors.silver}
        scrollEnabled
        renderIndicator={indicatorProps => {
          return (
            <TabBarIndicator
              {...indicatorProps}
              style={{
                marginTop: 10,
                backgroundColor:
                  indicatorProps.navigationState.index === index
                    ? colors.darkYellow
                    : colors.silver,
              }}
            />
          );
        }}
        style={{backgroundColor: colors.white}}
        labelStyle={styles.tabLabel}
        tabStyle={styles.tabStyle}
      />
    );
  };

  return (
    <View
      style={[commonSty.mainCenterNoJustify, {backgroundColor: colors.white}]}>
      <Header imgSrc={Images.list} title={'Services'} />
      <View style={commonSty.HW}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          tabBarPosition="top"
          style={{marginTop: verticalScale(5)}}
        />
      </View>
    </View>
  );
};

export default Home;
