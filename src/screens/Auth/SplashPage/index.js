import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    initial();
  }, []);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'ZBWA Notification Permission',
          message:
            'ZBWA would like to send you push notifications ' +
            'to keep you updated on the latest app features.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Don’t Allow',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      }
      console.log('this', granted);
    } catch (err) {
      console.warn(err);
    }
  };

  const initial = async () => {
    let Token = await AsyncStorage.getItem('user_token');
    if (!Token) {
      // setTimeout(() => navigation.replace('Login'), 2000);
      setTimeout(() => {
        navigation.replace('FirstPage')
      }, 2000);
    } else {
      setTimeout(() => navigation.replace('Home'), 2000);
    }
  };
  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image style={{ width: '99%', height: 256 }} source={require('../../../assets/Logo/ZBW_black_logo-transformed.png')} />
    </LinearGradient>
  );
};
export default Splash;
