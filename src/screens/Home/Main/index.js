import {FlashList} from '@shopify/flash-list';
import {useQuery} from '@tanstack/react-query';
import RBSheet from 'react-native-raw-bottom-sheet';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Image, Modal, TouchableOpacity, View} from 'react-native';

import Typography from '../../../components/Typo';
import PrimaryBtn from '../../../components/button';
import TextField from '../../../components/TextField';

import {Images} from '../../../constants';
import {FilterData} from '../../../constants/data';

import moment from 'moment';

import styles from './styles';

import {commonSty} from '../../../utils';

import {MainData} from '../../../Services/APIService';

const Home = () => {
  // query
  const Services = useQuery(['getData'], () => MainData());

  // useStates
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState(null);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(false);
  const [check, setCheck] = useState({
    id: 1,
    title: 'All Launches',
  });

  // refs
  const filterSheet = useRef();

  // useEffects
  useEffect(() => {
    setTimeout(() => {
      setQuery(!query);
    }, 500);
    return clearTimeout();
  }, []);

  // memoizations
  const getData = useMemo(() => {
    setData(Services?.data?.data);
  }, [query]);

  // functions
  const handleSubmit = () => {
    filterSheet.current.close();
    if (check.id == 1) {
      setData(Services?.data?.data);
    } else if (check.id == 2) {
      const pastLaunches = Services?.data?.data.filter((item, index) => {
        return new Date(item.launch_date_local) < new Date();
      });
      console.log('pastLaunches', pastLaunches);
      setData(pastLaunches);
    } else {
      const upcomingLaunches = Services?.data?.data.filter((item, index) => {
        return new Date(item.launch_date_local) > new Date();
      });
      console.log('upcomingLaunches', upcomingLaunches);
      setData(upcomingLaunches);
    }
  };
  const onSearchChange = search => {
    const tempData = Services?.data?.data;
    const mainSearch = tempData.filter(itm => {
      return (
        itm.mission_name.includes(search) ||
        itm.flight_number.toString().includes(search) ||
        itm.rocket.rocket_name.includes(search)
      );
    });
    setData(mainSearch);
  };

  return (
    <View style={commonSty.mainCenterNoJustify}>
      <Header
        open={() => filterSheet.current.open()}
        onSearchChange={onSearchChange}></Header>
      <View style={styles.flatContainer}>
        <FlashList
          data={data}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={145}
          keyExtractor={item => item.flight_number.toString()}
          renderItem={({item, index}) => {
            return (
              <LaunchItem
                key={index + 1}
                data={item}
                onPress={() => {
                  setModal(!modal), setDetails(item);
                }}
              />
            );
          }}
        />
        <LaunchItemModal
          modal={modal}
          setModal={setModal}
          setDetails={setDetails}
          details={details}
        />
      </View>
      <RBSheet
        ref={filterSheet}
        height={400}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: styles.sheetContainer,
          wrapper: styles.sheetBg,
          draggableIcon: styles.sheetIcon,
        }}>
        <View style={[commonSty.rowCenter2, {width: '92%'}]}>
          <Typography
            title={'Filter'}
            size={24}
            txtStyle={[styles.txtStyle, styles.sheetHeader]}
          />
          <TouchableOpacity onPress={() => filterSheet.current.close()}>
            <Image
              source={Images.close}
              resizeMode="contain"
              style={commonSty.size(18)}
            />
          </TouchableOpacity>
        </View>
        {FilterData.map((item, index) => {
          const mainCheck = check.id === item.id;
          return (
            <FilterItem
              key={item.key}
              mainCheck={mainCheck}
              setCheck={setCheck}
              item={item}
            />
          );
        })}
        <PrimaryBtn btnTitle={'Submit'} onPress={handleSubmit} />
      </RBSheet>
    </View>
  );
};

export default Home;

// components
const LaunchItemModal = ({modal, setModal, setDetails, details}) => {
  return (
    <Modal visible={modal} transparent statusBarTranslucent>
      <View style={commonSty.modalContainer}>
        <View style={styles.LaunchItemModalContainer}>
          <View style={[commonSty.rowBet, {marginVertical: 10}]}>
            <Typography
              title={'Launch Details'}
              size={28}
              txtStyle={styles.txtStyle}
            />
            <TouchableOpacity
              onPress={() => {
                setModal(false);
                setDetails('');
              }}>
              <Image
                source={Images.close}
                resizeMode="contain"
                style={commonSty.size(18)}
              />
            </TouchableOpacity>
          </View>
          <CommonTxt
            name={'Mission Name'}
            title={`: ${details?.mission_name}`}
          />
          <CommonTxt name={'Launch Year'} title={`: ${details?.launch_year}`} />
          <CommonTxt
            name={'Launch Site'}
            title={`: ${details?.launch_site?.site_name}`}
          />
          <CommonTxt
            name={'Launch Date'}
            title={`: ${moment(details?.launch_date_local).format(
              'MM/DD/YYYY',
            )}`}
          />
          <CommonTxt
            name={'First Number'}
            title={`: ${details?.flight_number}`}
          />
          <CommonTxt
            name={'Rocket Name: '}
            title={`: ${details?.rocket?.rocket_name}`}
          />
          <CommonTxt
            name={'Rocket Type'}
            title={`: ${details?.rocket?.rocket_type}`}
          />
          <CommonTxt name={'Launch Details'} title={`: ${details?.details}`} />
        </View>
      </View>
    </Modal>
  );
};

const CommonTxt = ({title, name}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
      }}>
      <Typography
        title={name}
        size={14}
        txtStyle={[styles.txtStyle, {width: '40%'}]}
      />
      <Typography
        size={14}
        txtStyle={[styles.txtStyle, {width: '60%'}]}
        title={title}
      />
    </View>
  );
};

const LaunchItem = ({data, onPress}) => {
  const desc = data?.details?.substring(0, 100);
  const tit = data?.mission_name?.substring(0, 10) ? true : false;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[commonSty.rowCenter2, styles.container]}>
      <Image
        resizeMode="stretch"
        style={styles.imgSty}
        source={Images.launch}
      />
      <View style={styles.subContainer}>
        <Typography
          size={14}
          txtStyle={styles.txtStyle}
          title={`Mission name : ${
            tit
              ? `${data?.mission_name?.substring(0, 10)}...`
              : data?.mission_name
          }`}
        />
        <Typography
          size={12}
          mt={10}
          txtStyle={{marginLeft: 5}}
          title={`Description : ${desc}`}
        />
      </View>
    </TouchableOpacity>
  );
};
function FilterItem(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setCheck(props.item);
      }}
      style={[
        commonSty.rowCenter2,
        {
          width: '80%',
          marginTop: 20,
        },
      ]}>
      <Image
        source={props.mainCheck ? Images.checkbox : Images.uncheck}
        resizeMode="contain"
        style={props.mainCheck ? commonSty.size(27) : commonSty.size(22)}
      />
      <Typography
        title={props.item.title}
        txtStyle={{
          width: '80%',
          marginLeft: 15,
          fontWeight: props.mainCheck ? 'bold' : '300',
        }}
      />
    </TouchableOpacity>
  );
}

function Header({onSearchChange, open}) {
  return (
    <View style={[styles[90], commonSty.rowCenter]}>
      <TextField
        leftIcon={Images.search}
        placeholder="Search Here"
        iconStyle={commonSty.size(16)}
        mainContainer={{
          width: '90%',
        }}
        inputContainerStyle={styles.headerSearchSty}
        onChangeText={onSearchChange}
      />
      <View
        style={[
          {
            width: '10%',
          },
          commonSty.center,
        ]}>
        <TouchableOpacity onPress={open}>
          <Image
            source={Images.filter}
            resizeMode="contain"
            style={[
              commonSty.size(27),
              {
                marginTop: 12,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
