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

const CreatePassword = () => {

  const navigation = useNavigation()
  const [code, setCode] = useState('')

  return (
    <LinearGradient colors={['#FFFBD3', '#FFFFFF', '#FFF8BA']} style={{ flex: 1 }}>
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
                    <Text style={styles.forgot}>Forgot Password</Text>
                    <View style={{ marginTop: 0 }}>
                      <View style={styles.inputView}>
                        <TextInput style={styles.input}
                          placeholder="New Password"
                          keyboardType="number-pad"
                          placeholderTextColor={'#FFFFFF'}
                        />
                      </View>
                      <View style={styles.inputView}>
                        <TextInput style={styles.input}
                          placeholder="Confirm Password"
                          keyboardType="number-pad"
                          placeholderTextColor={'#FFFFFF'}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 57, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.button}>
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