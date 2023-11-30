import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import Image1 from "../../../assets/Image/image1.svg";
import Image2 from "../../../assets/Image/image2.svg";
import Image3 from "../../../assets/Image/image3.svg";
import Image4 from "../../../assets/Image/image4.svg";
import Image5 from "../../../assets/Image/image5.svg";
import Image6 from "../../../assets/Image/image6.svg";
import Image7 from "../../../assets/Image/image7.svg";
import Image8 from "../../../assets/Image/image8.svg";
import Image9 from "../../../assets/Image/image9.svg";
import Image10 from "../../../assets/Image/image10.svg";
import Image11 from "../../../assets/Image/image11.svg";
import Image12 from "../../../assets/Image/image12.svg";
import Image13 from "../../../assets/Image/image13.svg";
import Image14 from "../../../assets/Image/image14.svg";


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
    // <View style={styles.container}>
      <LinearGradient colors={['#FFFBD3','#FFFFFF','#FFF8BA']} style={{
            flex: 1,
           alignItems:'center',
           justifyContent:'center'       
      }}>

        {/* <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'45%'}}>
          <Image3/>
          <View style={{marginTop:-20}}>
          <Image2/>
          </View>
          <Image1/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'60%',alignItems:'center',marginTop:15}}>
          <Image6/> 
          <Image4/>
          <Image5/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'45%',marginTop:15}}>
          <Image7/> 
          <View style={{marginTop:20}}>
          <Image9/>
          </View>
          <Image8/>
        </View> */}
        <Image style={{width:'99%',height:256}} source={require('../../../assets/Logo/ZBW_black_logo-transformed.png')}/>
        {/* <ZaveriBazarlogo /> */}
        {/* <Logo/> */}
        {/* <View style={{marginTop:60,alignItems:'center',justifyContent:'center',borderWidth:0}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'50%'}}>
        <Image8/>
          <View style={{marginTop:-35}}>
          <Image11/>
          </View>
          <Image4/>

        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'60%',alignItems:'center',marginTop:25,marginLeft:10}}>
          <Image14/>
          <Image3/>
          <Image12/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,width:'53%',marginTop:25,marginLeft:10}}>
        <Image10/> 
          <View style={{marginTop:10}}>
          <Image13/> 
          </View>
          <Image7/>
        </View>
        </View> */}
        </LinearGradient>
    // </View>
  );
};
export default Splash;
