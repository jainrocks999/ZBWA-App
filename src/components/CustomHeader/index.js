import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import HeaderArrow from "../../assets/Icon/HeaderArrow.svg";
import HeaderBell from "../../assets/Icon/HeaderBell.svg";

const CustomHeader=({title,onPress})=>{
    return(
        <View style={{height:45,backgroundColor:'#000000',width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5} 
            onPress={onPress}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}
            >
              <HeaderArrow/>
            </TouchableOpacity>
            <Text style={{fontSize:16,color:'#FCDA64',fontFamily:'Montserrat-Bold'}}>{title}</Text>
            <TouchableOpacity
            activeOpacity={0.5}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}

            >
              <HeaderBell/>
            </TouchableOpacity>
        </View>
    )
}
export default CustomHeader;