import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BackArrow from "../../../assets/Icon/BackArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import { useNavigation } from "@react-navigation/native";
import OtpInputs from "react-native-otp-inputs";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import LottieView from 'lottie-react-native';
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";

const CreatePassword = ({route}) => {

  const navigation = useNavigation()
  const [newPass, setNewPass] = useState('')
  const [confirmPass,setConfirmPass]=useState('')
  const [loader,setLoader]=useState(false)
console.log('this is route data1',route.params);
  const changePassword=()=>{
    // 
    if(newPass==''){
      Toast.show('Please enter your new password')
    }
    else if(confirmPass==''){
      Toast.show(`Please enter confirm password`)
    }
    else if(newPass != confirmPass){
      Toast.show('New password and confirm password must be same')
    }
    else{
      setLoader(true)
      axios({
        method: 'post',
        url: 'http://45.79.123.102:49002/api/user/change/pass',
        data: {
          "password": newPass,
          "mobile": route.params.mobile
      }
      })
    .then(function(response) {
      if(response.data.code=='200'){
        setLoader(false)
        Toast.show(response.data.message )
        navigation.navigate('Login')
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
      console.log("error", error.response.data)
      Toast.show(error?.response?.data?.message)
      console.log("error", error)
    })
    }
  }

  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{ flex: 1 }}>
      {loader?<Loader/>:null}
      <ScrollView contentContainerStyle={{flexGrow:1,}}>
      <KeyboardAwareScrollView
       extraScrollHeight={-200}
       enableOnAndroid={true}
       keyboardShouldPersistTaps="handled"
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       contentContainerStyle={{ flexGrow: 1 }}>    

         
          <View style={{
            // position:'absolute',bottom:135,left:0,right:0

            }}>
            <View style={styles.lottieView}>
            <View style={{ height: 310 }}>
              <LottieView style={styles.lottie} source={require('../../../assets/Json/Mpin-forgotpass animation.json')} autoPlay loop />
            </View>
          </View>
          <View style={[styles.view,{marginTop:38}]}>
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
                    <Text style={styles.forgot}>Create Password</Text>
                    <View style={{ marginTop: 0 }}>
                      <View style={styles.inputView}>
                        <TextInput style={styles.input}
                          placeholder="New Password"
                          keyboardType="default"
                          placeholderTextColor={'#FFFFFF'}
                          value={newPass}
                          onChangeText={(val)=>setNewPass(val)}
                        />
                      </View>
                      <View style={styles.inputView}>
                        <TextInput style={styles.input}
                          placeholder="Confirm Password"
                          keyboardType="default"
                          placeholderTextColor={'#FFFFFF'}
                          value={confirmPass}
                          onChangeText={(val)=>setConfirmPass(val)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 57, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                    onPress={()=>changePassword()}
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
          <View style={{height:140}}/>
      </KeyboardAwareScrollView>
      </ScrollView>
    </LinearGradient>
  )
}
export default CreatePassword;