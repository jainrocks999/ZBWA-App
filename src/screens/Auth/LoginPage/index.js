import React,{useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ForwardArrow from "../../../assets/Icon/ForwardArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import Eye from "../../../assets/Icon/eye.svg"
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";

const Login = () => {

  const navigation = useNavigation()
  const [mobile,setMobile]=useState('')
  const [password,setPassword]=useState('')
  const [loader,setLoader]=useState(false)

  const userLogin =()=>{
    if(mobile==''){
      Toast.show('Please enter your phone number')
    }
    else if(password==''){
      Toast.show('Please enter your password')
    }
    else{
      setLoader(true)
    axios({
      method: 'post',
      url: 'http://45.79.123.102:49002/api/user/login',
      data: {
        "mobile": mobile,
        "action": "password",
        "password": password
      }
    })
    .then(function(response) {
      if(response.data.code=='200'){
        setLoader(false)
        console.log('this is resposs',response.data);
        Toast.show(response.data.message )
        AsyncStorage.setItem(Storage.user_id,response.data.data._id)
        AsyncStorage.setItem(Storage.username,response.data.data.name)
        AsyncStorage.setItem(Storage.user_token,response.data.data.token)
        navigation.replace('Home')
      }
      else{
        setLoader(false)
        Toast.show(response.data.message )
      }
    })
    .catch(function(error) {
      setLoader(false)
      console.log("error", error)
      Toast.show(error.response.data.message)
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
          <View style={{}}>
          <View style={styles.main}>
            <Image style={styles.logo} source={require('../../../assets/Logo/Zbwa.png')} />
          </View>
          <View style={[styles.container,{marginTop:30}]}>
            <View style={styles.yellow}>
              <View style={styles.view}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.signup}>Sign up </Text>
                  <Text style={styles.free}>for free</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('RegisterPage')}
                  style={styles.arrowContainer}>
                  <ForwardArrow />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.black}>
                  <View style={{ paddingHorizontal: 40, marginTop: 10 }}>
                    <Text style={styles.already}>Already Registered user?</Text>
                    <Text style={styles.login}>Login</Text>
                    <View style={styles.country}>
                      <Text style={styles.ninety}>+91</Text>
                      <TextInput style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor={'#FFFFFF'}
                        value={mobile}
                        onChangeText={(val)=>setMobile(val)}
                        keyboardType="phone-pad"
                      />
                    </View>
                    <View style={styles.inputContainer}>

                      <TextInput style={styles.pass}
                        placeholder="Password"
                        placeholderTextColor={'#FFFFFF'}
                        keyboardType="number-pad"
                        value={password}
                        onChangeText={(val)=>setPassword(val)}
                      />
                      <Eye />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text
                        onPress={() => navigation.navigate('Forgot')}
                        style={styles.forgot}>Forgot Password?</Text>
                      <Text
                        onPress={() => navigation.navigate('Pin')}
                        style={styles.mpin}>Login with mPIN</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 30, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                      onPress={() => 
                        // navigation.replace('Home')
                        userLogin()
                      }
                      style={styles.button}>
                      <Text style={styles.text}>Login</Text>
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
export default Login;