import React from "react";
import { View,Text,FlatList,Image,Dimensions,ImageBackground } from "react-native";
const Current=()=>{
    return(
        <View style={{flex:1,alignItems:'center',marginTop:10}}>
            <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
                 <View style={{marginBottom:20,width:Dimensions.get('window').width-50}}>
                    <ImageBackground style={{width:Dimensions.get('window').width-50,borderTopLeftRadius:5,borderTopRightRadius:5,height:120,alignItems:'flex-end',justifyContent:'flex-end',paddingRight:10,paddingBottom:10}} source={item.img}>
                        <View style={{width:40,height:16,alignItems:'center',justifyContent:'center',backgroundColor:'#FCDA64',borderRadius:10}}>
                          <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:-2}}>Live</Text>
                        </View>
                    </ImageBackground>
                    <View style={{backgroundColor:'#FCDA64',height:40,width:'100%',alignItems:'center',justifyContent:'center',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                        <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12}}>{item.title}</Text>
                    </View>
                 </View>

            )}
            />
        </View>
    )
}
export default Current;
const data=[
    {img:require('../../assets/LocalImage/image.png'),title:'All India Jewellers Meeet'},
    {img:require('../../assets/LocalImage/image.png'),title:'All India Jewellers Meeet'},
    {img:require('../../assets/LocalImage/image.png'),title:'All India Jewellers Meeet'},
    {img:require('../../assets/LocalImage/image.png'),title:'All India Jewellers Meeet'}



]

