import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {useNavigation} from "@react-navigation/native";
const BottomTab = ({onPress}) => {
    const navigation=useNavigation()
    return (
        <View style={{
            height: 60,
            width: '100%',
            backgroundColor: '#FCDA64',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20
        }}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image source={require('../../assets/Icon/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={onPress}
             activeOpacity={0.5}>
                <Image source={require('../../assets/Icon/people.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('ZBWGroup')}
            activeOpacity={0.5}>
                <Image source={require('../../assets/Icon/msg.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default BottomTab;