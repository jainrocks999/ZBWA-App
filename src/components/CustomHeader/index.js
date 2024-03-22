import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import HeaderArrow from "../../assets/Icon/HeaderArrow.svg";
import HeaderBell from "../../assets/Icon/HeaderBell.svg";
import DownLoad from "../../assets/Icon/download.svg";
import styles from "./style";

const CustomHeader=({title,onPress,download,onPress1,onPress2})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
            activeOpacity={0.5} 
            onPress={onPress}
            style={styles.touch}>
              <HeaderArrow/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            {download?<TouchableOpacity
            onPress={onPress1}
            activeOpacity={0.5}
            style={styles.touch}>
              <DownLoad/>
            </TouchableOpacity>:
            <TouchableOpacity
            onPress={onPress2}
            activeOpacity={0.5}
            style={styles.touch}>
              <HeaderBell/>
            </TouchableOpacity>}
        </View>
    )
}
export default CustomHeader;