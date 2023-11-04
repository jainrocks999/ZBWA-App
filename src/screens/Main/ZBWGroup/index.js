import React from "react";
import { View,Text,TouchableOpacity, TextInput } from "react-native";
import HeaderArrow from "../../../assets/Icon/HeaderArrow.svg";
import ChatLogo from "../../../assets/Icon/ChatLogo.svg";
import { useNavigation } from "@react-navigation/native";
import Attach from "../../../assets/Icon/Attach.svg";
import Send from "../../../assets/Icon/Send.svg";


const ZBWGroup=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <View style={{height:45,backgroundColor:'#000000',width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5} 
            onPress={()=>navigation.goBack()}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}
            >
              <HeaderArrow/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <ChatLogo/>
            <Text style={{fontSize:16,color:'#FCDA64',fontFamily:'Montserrat-Bold',marginLeft:15}}>{'ZBW GROUP'}</Text>
            </View>
            <TouchableOpacity
            activeOpacity={0.5}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}

            >
            </TouchableOpacity>
        </View>
        <View style={{
            height:50,width:'100%',borderWidth:1,borderColor:'#D9D9D9',
            position:'absolute',bottom:0,left:0,right:0,
            flexDirection:'row',alignItems:'center',justifyContent:'space-between',
            paddingHorizontal:15
        }}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Attach/>
            <TextInput
             placeholder="Type a message..."
             style={{marginLeft:20,fontSize:13,color:'#B3B3B3',fontFamily:'Montserrat-Medium'}}
            />
          </View>
          <View>
            <Send/>
          </View>
        </View>
        </View>
    )
}
export default ZBWGroup;