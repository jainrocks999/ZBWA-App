import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    initial();
  }, []);

  const initial = async () => {
    let Token = await AsyncStorage.getItem('user_token');
    if (!Token) {
      setTimeout(() => navigation.replace('Login'), 2000);
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
