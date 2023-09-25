// import {useEffect, useState, Platform} from 'react';
// import {PermissionsAndroid} from 'react-native';

// const useLocationPermissions = () => {
//   const [locationPermission, setLocationPermission] = useState(null);

//   useEffect(() => {
//     async function checkLocationPermission() {
//       try {
//         if (Platform.OS === 'android') {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             setLocationPermission('granted');
//           } else {
//             setLocationPermission('denied');
//           }
//         } else if (Platform.OS === 'ios') {
//           // iOS does not require explicit permission checks in this way
//           setLocationPermission('granted');
//         }
//       } catch (error) {
//         console.error('Error checking location permission:', error);
//         setLocationPermission('error');
//       }
//     }

//     checkLocationPermission();
//   }, []);

//   return {
//     locationPermission,
//   };
// };

// export default useLocationPermissions;
