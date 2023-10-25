import React from "react";
import { View,Text,FlatList } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
const ZBWNews=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header
               title={"ZBW News"}
               onPress={()=>navigation.goBack()}
            />
            <View style={{paddingHorizontal:25}}>
                <View style={{borderBottomWidth:1,alignSelf:'flex-start',borderColor:'#FCDA64',marginTop:19}}>
                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,color:'#000000'}}>Latest News</Text>
                </View>
                <View>
                    <FlatList
                     data={data}
                     renderItem={({item})=>(
                        <View style={{padding:8,borderWidth:1,borderColor:'#FCDA64',marginVertical:10,borderRadius:15}}>
                           <Text style={{color:'#000000',fontSize:15,fontFamily:'Montserrat-Bold'}}>{item.title}</Text>
                           <Text style={{color:'#000000',fontSize:12,fontFamily:'Montserrat-Regular'}}>{item.date}</Text>
                           <Text style={{color:'#000000',fontSize:12,fontFamily:'Montserrat-Regular'}}>{item.description}</Text>

                        </View>
                     )}
                    />
                </View>
            </View>
        </View>
    )
}
export default ZBWNews;

const data=[
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},

]