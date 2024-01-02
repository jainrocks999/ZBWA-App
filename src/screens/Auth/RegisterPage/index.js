import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ForwardArrow from "../../../assets/Icon/ForwardArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import Eye from "../../../assets/Icon/eye.svg";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import CheckBox from "@react-native-community/checkbox";


const Register = () => {
  const navigation = useNavigation()
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [business, setBusiness] = useState('')
  const [gst, setGst] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loader, setLoader] = useState(false)
  const [toggleCheckBox,setToggleCheckBox]=useState(false)


  const handleRegister = () => {
    if (first == '') {
      Toast.show('Please enter your first name')
    }
    else if (last == '') {
      Toast.show('Please enter your last name')
    }
    else if (business == '') {
      Toast.show('Please enter your business name')
    }
    else if (gst == '') {
      Toast.show('Please enter your GST number')
    }
    else if (mobile == '') {
      Toast.show('Please enter your phone number')
    }
    else if (password == '') {
      Toast.show('Please enter your password')
    }
    else if (confirm == '') {
      Toast.show('Please enter your confirm password')
    }
    else if (password != confirm) {
      Toast.show('password and confirm password must be same')
    }
    else {
      setLoader(true)
      axios({
        method: 'post',
        url: 'http://45.79.123.102:49002/api/user/send/otp',
        data: {
          "mobile": mobile,
          "action": "signup"
        }
      })
        .then(function (response) {
          if (response.data.code == '200') {
            setLoader(false)
            console.log('this is resposs', response.data);
            navigation.navigate('Otp',{
              first:first,
              last:last,
              business:business,
              gst:gst,
              mobile:mobile,
              password:password,
              confirm:confirm,
              data:response.data.data
            })
          }
          else {
            setLoader(false)
            Toast.show(response.data.message)
          }
        })
        .catch(function (error) {
          setLoader(false)
          console.log("error", error)
          Toast.show(error.response.data.message)

        })
    }
  }


  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{ flex: 1 }}>
      {loader ? <Loader /> : null}
      <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
        <KeyboardAwareScrollView
          extraScrollHeight={-200}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{

          }}>
            <View style={styles.main}>
              <Image style={styles.logo} source={require('../../../assets/Logo/Zbwa.png')} />
            </View>
            <View style={[styles.view, { marginTop: 30 }]}>
              <View style={styles.yellow}>
                <View style={styles.login}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.loginText}>Login </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}>
                    <ForwardArrow />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View style={styles.black}>
                    <View style={styles.padding}>
                      <Text style={styles.new}>New user?</Text>
                      <Text style={styles.sign}>Sign up</Text>
                      <View style={[styles.border, { marginTop: 20 }]}>
                        <TextInput style={styles.input}
                          placeholder="First Name"
                          placeholderTextColor={'#FFFFFF'}
                          value={first}
                          onChangeText={(val) => setFirst(val)}
                          keyboardType="default"
                        />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <TextInput style={styles.input}
                          placeholder="Last Name"
                          placeholderTextColor={'#FFFFFF'}
                          value={last}
                          onChangeText={(val) => setLast(val)}
                          keyboardType="default"
                        />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <TextInput style={styles.input}
                          placeholder="Business Name"
                          placeholderTextColor={'#FFFFFF'}
                          value={business}
                          onChangeText={(val) => setBusiness(val)}
                          keyboardType="default"
                        />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <TextInput style={styles.input}
                          placeholder="GST Number"
                          placeholderTextColor={'#FFFFFF'}
                          value={gst}
                          onChangeText={(val) => setGst(val)}
                          keyboardType="default"
                        />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <Text style={[styles.ninety,{marginTop:1.5}]}>+91</Text>
                        <TextInput style={styles.input}
                          placeholder="Phone Number"
                          placeholderTextColor={'#FFFFFF'}
                          keyboardType="phone-pad"
                          value={mobile}
                          onChangeText={(val) => setMobile(val)}
                        />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <TextInput style={styles.input}
                          placeholder="Password"
                          placeholderTextColor={'#FFFFFF'}
                          value={password}
                          onChangeText={(val) => setPassword(val)}
                          keyboardType="number-pad"
                        />
                        <Eye />
                      </View>
                      <View style={[styles.border, { marginTop: 15 }]}>
                        <TextInput style={styles.input}
                          placeholder="Confirm Password"
                          placeholderTextColor={'#FFFFFF'}
                          value={confirm}
                          onChangeText={(val) => setConfirm(val)}
                          keyboardType="number-pad"
                        />
                        <Eye />
                      </View>

                    </View>
                    <View style={{ marginTop: 30, alignItems: 'flex-end' }}>
                      <TouchableOpacity
                        onPress={() => handleRegister()}
                        style={styles.button}>
                        <Text style={styles.signup}>Sign up</Text>
                        <Arrow />
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <CheckBox
                       style={{height:25,width:30}}
                      //  disabled={false}
                       value={toggleCheckBox}
                       onValueChange={(newValue) => setToggleCheckBox(newValue)}  
                       tintColors={{true: '#FCDA64', false: '#FCDA64'}}
                       onTintColor='#FCDA64'
                       onCheckColor='#FCDA64'            
                       />
                       <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:15,marginLeft:10,color:'#000'}}>{'I agree to the '}</Text>
                      <Text style={{borderBottomWidth:1,borderBottomColor:'#000',fontSize:15,color:'#000'}}>Terms and Conditions</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              
            </View>
            
          </View>
         
          <View style={{height:160}}/>
        </KeyboardAwareScrollView>
      </ScrollView>
    </LinearGradient>
    // </View>
  )
}
export default Register;