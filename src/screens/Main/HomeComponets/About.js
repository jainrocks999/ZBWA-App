import React from "react";
import { View,Text } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const About =()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <Header
          title={'About Us'}
          onPress={()=>navigation.goBack()}
          />
        </View>
    )
}
export default About;