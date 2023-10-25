import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity } from "react-native";
import Header from "../../../components/CustomHeader";
import Dash from "../../../assets/Icon/Dash.svg";
import Plus from "../../../assets/Icon/Plus.svg";
import { useNavigation } from "@react-navigation/native";

const SecondaryMember=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header 
              title={'Secondary Member'}
              onPress={()=>navigation.goBack()}
            />
            <View style={{paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Montserrat-Regular',fontSize:14,color:'#000000'}}>Add upto 4 Secondary members</Text>
            </View>
            <View style={{alignItems:'center',marginTop:5}}>
              <FlatList
              data={data}
              numColumns={2}
              renderItem={({item})=>(
                <View style={{width:'40%',height:155,marginHorizontal:20,marginVertical:15}}>
                   <TouchableOpacity style={{borderWidth:1,height:15,width:15,borderColor:'#6B6B6B',alignItems:'center',justifyContent:'center',alignSelf:'flex-end',marginRight:20}}>
                     <Dash/>
                   </TouchableOpacity>
                   <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    position:'absolute',
                    bottom:5,left:0,right:0
                    }}>
                        <View style={{
                            height:60,
                            width:100,
                            backgroundColor:'#FCDA64',
                            borderBottomLeftRadius:50,
                            borderBottomRightRadius:50,
                            alignItems:'center'
                            }}>
                            <View style={{marginTop:-36}}>
                                <Image source={item.img}/>
                            </View>
                        </View>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000000',marginTop:10}}>{item.title}</Text>
                   </View>

                </View>
              )}
              />
            </View>
            <View style={{position:'absolute',bottom:30,right:20}}>
               <TouchableOpacity
                onPress={()=>navigation.navigate('AddSecondaryMember')}
                style={{height:48,width:48,borderRadius:24,backgroundColor:'#FCDA64',alignItems:'center',justifyContent:'center'}}>
                 <Plus/>
               </TouchableOpacity>
            </View>
        </View>
    )
}
export default SecondaryMember;

const data=[
    {title:'Pradip Ghanekar',img:require('../../../assets/LocalImage/Ellipse9.png')},
    {title:'Rahul Rathod',img:require('../../../assets/LocalImage/Ellipse10.png')},
    {title:'Mayank Kothari',img:require('../../../assets/LocalImage/Ellipse11.png')},
    
]