import React from "react";
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView  } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ForwardArrow from "../../../assets/Icon/ForwardArrow.svg";
import Arrow from "../../../assets/Icon/Arrow.svg";
import Eye from "../../../assets/Icon/eye.svg";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';


const Register=()=>{

  const navigation=useNavigation()


  return(
    // <View style={{flex:1,backgroundColor:'#fff'}}>
    <LinearGradient colors={['#FFFBD3', '#FFF8BA']} style={{flex: 1}}>  
        <KeyboardAwareScrollView
              style={{flex:1,}}
              extraScrollHeight={-100}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{flexGrow:1}}
              >
      <View style={{flex:1}}>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
      <Image style={{height:168,width:168,}} source={require('../../../assets/Logo/Zbwa.png')}/>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:20,}}>
        <View style={{height:430,width:'90%',backgroundColor:'#FCDA64',borderRadius:40}}>
           <View style={{
            paddingHorizontal:40,
            paddingVertical:15,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
            }}>
            <View style={{flexDirection:'row'}}>
               <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,color:'#000'}}>Login </Text>
            </View>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>navigation.navigate('Login')}
            style={{
              width:42,
              height:38,
              backgroundColor:'#000000',
              borderTopLeftRadius:40,
              borderTopRightRadius:80,
              borderBottomLeftRadius:40,
              borderBottomRightRadius:80,
              alignItems:'center',
              justifyContent:'center'
              }}>
                 <ForwardArrow/>
            </TouchableOpacity>
           </View>
           <View style={{alignItems:'center'}}>
           <View style={{
            backgroundColor:'#000000',
            width:'94%',
            height:430,
            borderTopLeftRadius:40,
            borderTopRightRadius:80,
            borderBottomLeftRadius:40,
            borderBottomRightRadius:80,
            }}>
              <View style={{paddingHorizontal:40,marginTop:10}}>
                  <Text style={{color:'#FCDA64',fontSize:10,fontFamily:'Montserrat-Regular'}}>New user?</Text>
                  <Text style={{fontFamily:'Montserrat-Bold',color:'#fff',fontSize:18,marginTop:2}}>Sign up</Text>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:20,
                    height:30
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
                      placeholder="First Name"
                      placeholderTextColor={'#FFFFFF'}
                    />
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
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
                      placeholder="Last Name"
                      placeholderTextColor={'#FFFFFF'}
                    />
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
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
                      placeholder="Business Name"
                      placeholderTextColor={'#FFFFFF'}
                    />
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
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
                      placeholder="GST Number"
                      placeholderTextColor={'#FFFFFF'}
                    />
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
                    }}>
                       <Text style={{
                      color:'#FFFFFF',
                      fontSize:12,
                      fontFamily:'Montserrat-Regular'}}>+91</Text>
                    <TextInput style={{
                      color:'#FFFFFF',
                      height:35,
                      borderColor:'#fff',
                      marginTop:4,
                      width:'90%',
                      fontSize:12,
                      marginLeft:12,
                      fontFamily:'Montserrat-Regular'
                    }}
                      placeholder="Phone Number"
                      placeholderTextColor={'#FFFFFF'}
                      keyboardType="number-pad"
                    />
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
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
                      placeholder="Password"
                      placeholderTextColor={'#FFFFFF'}
                    />
                    <Eye/>
                  </View>
                  <View style={{
                    borderBottomWidth:1,
                    borderColor:'#FFFFFF',
                    flexDirection:'row',
                    alignItems:'center',
                    width:'90%',
                    marginTop:15,
                    height:30
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
                      placeholder="Confirm Passwaord"
                      placeholderTextColor={'#FFFFFF'}
                    />
                    <Eye/>
                  </View>
                 
                </View>
                <View style={{marginTop:30,alignItems:'flex-end'}}>
                    <TouchableOpacity style={{
                      height:65,
                      width:130,
                      borderRadius:20,
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor:'#FCDA64',
                      flexDirection:'row',
                    }}>
                      <Text style={{color:'#000000',fontSize:18,fontFamily:'Montserrat-Bold',marginRight:14}}>Sign up</Text>
                      <Arrow/>
                    </TouchableOpacity>
                  </View>
              
           </View>
           </View>
        </View>
      </View>
      </View>
      </KeyboardAwareScrollView>
      </LinearGradient>
    // </View>
  )
}
export default Register;