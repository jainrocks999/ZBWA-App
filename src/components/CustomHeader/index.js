import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import HeaderArrow from "../../assets/Icon/HeaderArrow.svg";
import HeaderBell from "../../assets/Icon/HeaderBell.svg";
import styles from "./style";

const CustomHeader=({title,onPress})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
            activeOpacity={0.5} 
            onPress={onPress}
            style={styles.touch}>
              <HeaderArrow/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
            activeOpacity={0.5}
            style={styles.touch}>
              <HeaderBell/>
            </TouchableOpacity>
        </View>
    )
}
export default CustomHeader;