import React from "react";
import { View,Text } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const Term =()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <Header
          title={'Terms of Service'}
          onPress={()=>navigation.goBack()}
          />
        </View>
    )
}
export default Term;