import React from "react";
import { View,Text,FlatList,StyleSheet } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
const ZBWNews=()=>{
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <Header
               title={"ZBW News"}
               onPress={()=>navigation.goBack()}
            />
            <View style={{paddingHorizontal:25}}>
                <View style={styles.heading}>
                    <Text style={styles.latest}>Latest News</Text>
                </View>
                <View>
                    <FlatList
                     data={data}
                     renderItem={({item})=>(
                        <View style={styles.view}>
                           <Text style={styles.title}>{item.title}</Text>
                           <Text style={styles.date}>{item.date}</Text>
                           <Text style={styles.date}>{item.description}</Text>

                        </View>
                     )}
                    />
                </View>
            </View>
        </View>
    )
}
export default ZBWNews;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    heading:{
        borderBottomWidth:1,
        alignSelf:'flex-start',
        borderColor:'#FCDA64',
        marginTop:19
    },
    latest:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        color:'#000000'
    },
    view:{
        padding:8,
        borderWidth:1,
        borderColor:'#FCDA64',
        marginVertical:10,
        borderRadius:15
    },
    title:{
        color:'#000000',
        fontSize:15,
        fontFamily:'Montserrat-Bold'
    },
    date:{
        color:'#000000',
        fontSize:12,
        fontFamily:'Montserrat-Regular'
    }
})

const data=[
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},
    {title:'New update available - android',date:'22 Sept, 2023',description:'Update to the latest version of our Android and ios app for a smoother registration Process.... '},

]