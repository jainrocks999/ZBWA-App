import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";

const ViewPdf=({route})=>{
    const navigation=useNavigation()
    console.log('this is route data',route.params.currentMessage.file.url);
    return(
        <View style={{ padding: 0,flex:1 }}>
            {/* <Text>narenddxxl</Text> */}
        <Pdf
            trustAllCerts={false}
            source={{ uri: route.params.currentMessage.file.url, cache: true }}
            onLoadComplete={(numberOfPages, filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log("error    ",error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }} />
        <TouchableOpacity
         onPress={()=>navigation.goBack()}
         style={styles.buttonCancel}>
            <Text style={styles.textBtn}>X</Text>
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
        top: 20,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

