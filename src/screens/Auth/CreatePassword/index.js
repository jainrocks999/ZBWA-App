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
import Edit from "../../../assets/Icon/edit.svg";
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";

const CreatePassword = ({route}) => {
console.log('this is route',route.params);
  const navigation = useNavigation()
  const [code, setCode] = useState(route.params.data)
  const [mobile,setMobile]=useState(route.params.mobile)
  const [loader,setLoader]=useState(false)


  const resendOtp =()=> {
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
        setCode(response.data.data)
        setLoader(false)
        Toast.show(response.data.message )
        console.log('this is response',response.data);
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
      // Toast.show(error?.response?.data?.message)
    })
   }
  }


  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{ flex: 1 }}>
      {loader?<Loader/>:null}
      <ScrollView contentContainerStyle={{flexGrow:1,}}>
      <KeyboardAwareScrollView
      // style={{flex:1}}
       extraScrollHeight={0}
       enableOnAndroid={true}
       keyboardShouldPersistTaps="handled"
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       contentContainerStyle={{ flexGrow: 1 }}>    

          <View style={{
            // position:'absolute',bottom:144,left:0,right:0
            }}>
          <View style={styles.lottieView}>
            <View style={{ height: 310 }}>
              <LottieView style={styles.lottie} source={require('../../../assets/Json/Mpin-forgotpass animation.json')} autoPlay loop />
            </View>
          </View>
          <View style={[styles.view,{marginTop:34}]}>
            <View style={styles.yellow}>
              <View style={styles.backView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.back}>Back </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                  style={styles.arrow}>
                  <BackArrow />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.black}>
                  <View style={styles.view1}>
                    <Text style={styles.you}>You want to change your password?</Text>
                    <Text style={styles.forgot}>Forgot Password</Text>
                    <View style={{ marginTop: 0 }}>
                      <View style={styles.inputView}>
                      <TextInput style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor={'#FFFFFF'}
                        value={mobile}
                        onChangeText={(val)=>setMobile(val)}
                        keyboardType="phone-pad"
                      />
                        <Edit/>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <OtpInputs
                          handleChange={code => setCode(code)}
                          numberOfInputs={6}
                          // secureTextEntry
                          value={code}
                          defaultValue={code}
                          autofillFromClipboard={true}
                          keyboardType={'numeric'}
                          style={styles.inputView1}
                          // inputContainerStyles={[styles.otp]}
                          inputStyles={styles.otp}
                        />
                      </View>
                      
                    </View>
                     <View style={{ marginTop: 15 }}>
                      <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={()=>resendOtp()}
                      >
                      <Text style={styles.resend}>Resend OTP</Text>
                      </TouchableOpacity>
                    </View> 
                  </View>
                  <View style={{ marginTop: 27, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                     onPress={()=>navigation.navigate('ChangePassword')}
                     style={styles.button}>
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
export default CreatePassword;