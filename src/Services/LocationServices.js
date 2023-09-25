// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Geolocation from '@react-native-community/geolocation';

// const useLocationServices = () => {
//   const [cords, setCords] = useState();
//   const getLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         const {latitude, longitude} = position.coords;
//         const data = {
//           latitude: latitude,
//           longitude: longitude,
//         };
//         setCords(data);
//       },
//       error => {
//         console.log(error.code, error.message, 'THis is error');
//       },
//     );
//   };
//   useEffect(() => {
//     getLocation();
//   }, []);
//   return {
//     cords,
//   };
// };

// export default useLocationServices;

// const styles = StyleSheet.create({});
