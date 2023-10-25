import React,{useState} from "react";
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView  } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BackArrow from "../../../assets/Icon/BackArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import { useNavigation } from "@react-navigation/native";
import OtpInputs from "react-native-otp-inputs";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import LottieView from 'lottie-react-native';


const ForgotPassword=()=>{

  const navigation=useNavigation()
  const [code,setCode]=useState('')


  return(
    <LinearGradient colors={['#FFFBD3', '#FFF8BA']} style={{flex: 1}}>  

    <KeyboardAwareScrollView
              style={{flex:1}}
              extraScrollHeight={-100}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{flexGrow:1}}
              >
      <View style={{flex:1}}>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
      <View style={{height:310}}>
        <LottieView style={{height:306,width:306}} source={require('../../../assets/Json/OTP Animation.json')} autoPlay loop />
        </View>
      </View>
      <View style={{
        alignItems:'center',justifyContent:'center',marginTop:47,
        }}>
        
        <View style={{height:240,width:'90%',backgroundColor:'#FCDA64',borderRadius:40,}}>
           <View style={{
            paddingHorizontal:40,
            paddingVertical:15,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
            }}>
            <View style={{flexDirection:'row'}}>
               <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,color:'#000'}}>Back </Text>
            </View>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>navigation.goBack()}
            style={{
              width:42,
              height:38,
              backgroundColor:'#000000',
              borderTopLeftRadius:80,
              borderTopRightRadius:40,
              borderBottomLeftRadius:80,
              borderBottomRightRadius:40,
              alignItems:'center',
              justifyContent:'center'
              }}>
                 <BackArrow/>
            </TouchableOpacity>
           </View>
           <View style={{alignItems:'center'}}>
           <View style={{
            backgroundColor:'#000000',
            width:'94%',
            height:233,
            borderTopLeftRadius:40,
            borderTopRightRadius:80,
            borderBottomLeftRadius:40,
            borderBottomRightRadius:80,
            }}>
              <View style={{paddingHorizontal:40,marginTop:10}}>
                  <Text style={{color:'#FCDA64',fontSize:10,fontFamily:'Montserrat-Regular'}}>You want to change your password?</Text>
                  <Text style={{fontFamily:'Montserrat-Bold',color:'#fff',fontSize:18,marginTop:2}}>Forgot Password</Text>
                   <View style={{marginTop:0}}>
                   <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30,
                    justifyContent:'space-between'
                    }}>
                   
                    <TextInput style={{
                      color:'#FFFFFF',
                      height:35,
                      borderColor:'#fff',
                      marginTop:4,
                      width:'90%',
                      fontSize:12,
                      fontFamily:'Montserrat-Regular'
                    }}
                      placeholder="Phone Number"
                      keyboardType="number-pad"
                      placeholderTextColor={'#FFFFFF'}
                    />
                    <View>
                      <Text onPress={()=>navigation.navigate('Otp')} style={{color:'#FCDA64',fontFamily:'Montserrat-SemiBold',fontSize:12}}>OTP</Text>
                    </View>
                  </View>
                  <View style={{marginTop:10}}>
                   <OtpInputs
                      handleChange={code => setCode(code)}
                      numberOfInputs={6}
                      secureTextEntry
                      autofillFromClipboard={true}
                      keyboardType={'numeric'}
                      style={styles.inputView}
                      // inputContainerStyles={[styles.otp]}
                      inputStyles={styles.otp}
                    />
                    </View>
                   </View>
                  <View style={{marginTop:10}}>
                  <Text style={{color:'#FCDA64',fontSize:10,fontFamily:'Montserrat-Regular'}}>Resend OTP</Text>
                  </View>
                </View>
                <View style={{marginTop:32,alignItems:'flex-end'}}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('CreatePassword')}
                    style={{
                      height:65,
                      width:130,
                      borderRadius:20,
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor:'#FCDA64',
                      flexDirection:'row',
                    }}>
                      <Text style={{color:'#000000',fontSize:18,fontFamily:'Montserrat-Bold',marginRight:14}}>Verify</Text>
                      <Arrow/>
                    </TouchableOpacity>
                  </View>
              
           </View>
           </View>
        </View>
      </View>
      </View>
      {/* <View style={{height:50,borderWidth:1}}/> */}
      </KeyboardAwareScrollView>
    </LinearGradient>
  )
}
export default ForgotPassword;