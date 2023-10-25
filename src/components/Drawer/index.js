import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
} from 'react-native';
import DrawerLogo from "../../assets/Icon/DrawerLogo.svg";
import DrawerCross from "../../assets/Icon/DrawerCross.svg";
import { useNavigation,DrawerActions } from "@react-navigation/native";

const Drawer = () => {
    const navigation =useNavigation()
    return(
        <View style={{backgroundColor:'#FDE48B',flex:1}}>
            <View style={{paddingLeft:15,paddingTop:10,flexDirection:'row',justifyContent:'space-between',paddingRight:10}}>
               <DrawerLogo/>
               <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())}>
                 <DrawerCross/>
               </TouchableOpacity>
            </View>
            <View style={{paddingLeft:15,marginTop:30}}>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium'}}>About Us</Text>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium',marginTop:20}}>Terms of Service</Text>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium',marginTop:20}}>Contact us</Text>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium',marginTop:20}}>Sign out</Text>
                <Text style={{fontSize:16,color:'#EA5F5F',fontFamily:'Montserrat-Medium',marginTop:20}}>Delete user</Text>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium',marginTop:20}}>My QR Code</Text>

            </View>
            <View style={{bottom:15,left:0,right:0,position:'absolute',paddingLeft:20}}>
                <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Medium'}}>Version 1.1</Text>
            </View>
        </View>
    )
}
  
export default Drawer;