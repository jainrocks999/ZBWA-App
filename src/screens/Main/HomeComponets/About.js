import React from "react";
import { View,Text,Dimensions } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Pdf from 'react-native-pdf';


const About =()=>{
    const navigation=useNavigation()
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <Header
          title={'About Us'}
          onPress={()=>navigation.goBack()}
          />
          <Pdf
             trustAllCerts={false}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log("error    ",error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={{ flex:1,
                        width:Dimensions.get('window').width,
                        height:Dimensions.get('window').height,}}/>
        </View>
    )
}
export default About;