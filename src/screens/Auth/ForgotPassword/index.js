import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BackArrow from "../../../assets/Icon/BackArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import { useNavigation } from "@react-navigation/native";
import OtpInputs from "react-native-otp-inputs";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import LottieView from 'lottie-react-native';
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";

const ForgotPassword = () => {

  const navigation = useNavigation()
  const [mobile,setMobile]=useState('')
  const [loader,setLoader]=useState(false)

  const manageSend =()=> {
    console.log('this is working');
    if(mobile==''){
      Toast.show('Please enter your phone number')
    }
    else{
      setLoader(true)
      axios({
        method: 'post',
        url: 'http://45.79.123.102:49002/api/user/send/otp',
        data: {
          "mobile": mobile,
          "action": "reset_password"
        }
      })
    .then(function(response) {
      if(response.data.code=='200'){
        setLoader(false)
        Toast.show(response.data.message )
        console.log('this is response',response.data);
        navigation.replace('CreatePassword',{
          data:response.data.data,
          mobile:mobile
        })
      }
      else{
        setLoader(false)
        Toast.show(response.data.message )
      }
      setLoader(false)
    })
    .catch(function(error) {
      setLoader(false)
      console.log("error", error)
      Toast.show(error?.response?.data?.message)
    })
   }
  }


  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{ flex: 1 }}>
      {loader?<Loader/>:null}
      <ScrollView contentContainerStyle={{flexGrow:1,}}>
      <KeyboardAwareScrollView
       extraScrollHeight={0}
       enableOnAndroid={true}
       keyboardShouldPersistTaps="handled"
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       contentContainerStyle={{ flexGrow: 1 }}>          
          <View>
              <View style={[styles.view]}>
            <View style={{ height: 310 }}>
              <LottieView style={styles.lottie} source={require('../../../assets/Json/OTP Animation.json')} autoPlay loop />
            </View>
          </View>
          <View style={[styles.main,{marginTop:30}]}>
            <View style={styles.yellow}>
              <View style={styles.high}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.back}>Back </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                  style={styles.arrowContainer}>
                  <BackArrow />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.container}>
                  <View style={styles.padding}>
                    <Text style={styles.you}>You want to change your password?</Text>
                    <Text style={styles.forgot}>Forgot Password</Text>
                    <View style={{ marginTop: 0 }}>
                      <View style={styles.inputViews}>
                      <TextInput style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor={'#FFFFFF'}
                        value={mobile}
                        onChangeText={(val)=>setMobile(val)}
                        keyboardType="phone-pad"
                      />
                        <View>
                          <Text 
                          onPress={() => validate()} 
                          style={styles.otpText}>OTP</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 105, alignItems: 'flex-end',}}>
                    <TouchableOpacity
                      onPress={()=>manageSend()}
                      activeOpacity={0.5}
                      style={styles.touch}>
                      <Text style={styles.verify}>Verify</Text>
                      <Arrow />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </View>
      </KeyboardAwareScrollView>
      </ScrollView>
    </LinearGradient>
  )
}
export default ForgotPassword;

