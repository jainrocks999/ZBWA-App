import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import VideoPlayer from 'react-native-video-controls';

const ViewPdf=()=>{
    const navigation=useNavigation()
    // console.log('this is route data',route.params.currentMessage.file.url);
    return(
        <View style={{ padding: 0,flex:1 }}>
            {/* <Text>narenddxxl</Text> */}
            <VideoPlayer
                tapAnywhereToPause
                pause={true}
                controls={true}
                source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' ,type: 'mp4',}}
                disableBack
                onError={err => console.log(err)}
                /> 
        <TouchableOpacity
         onPress={()=>navigation.goBack()}
         style={styles.buttonCancel}>
            <CircleCross/>
            {/* <Text style={styles.textBtn}>X</Text> */}
        </TouchableOpacity>
    </View>
    )

}
export default ViewPdf;
const styles = StyleSheet.create({
    buttonCancel: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        left: 13,
        top: 10,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

