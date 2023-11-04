import React from "react";
import { View,Text } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const Contact =()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <Header
          title={'Contact Us'}
          onPress={()=>navigation.goBack()}
          />
        </View>
    )
}
export default Contact;