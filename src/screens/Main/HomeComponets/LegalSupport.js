import React from "react";
import { View,Text,TextInput,FlatList,Image } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const LegalSupport=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <Header 
           title={'Legal Support'}
           onPress={()=>navigation.goBack()}
          />
           <View style={{alignItems:'center',marginTop:25}}>
              <FlatList
              data={data}
              numColumns={2}
              renderItem={({item})=>(
                <View style={{width:'40%',height:135,marginHorizontal:20,marginVertical:15}}>
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
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000000',marginTop:10,width:'50%',textAlign:'center'}}>{item.title}</Text>
                   </View>

                </View>
              )}
              />
            </View>
        </View>
    )
}
export default LegalSupport;
const data=[
    {title:'Adv. Rajesh Thakkar',img:require('../../../assets/LocalImage/Ellipse9.png')},
    {title:'Adv. Sunny Jain',img:require('../../../assets/LocalImage/Ellipse10.png')},
    {title:'Adv. Rajesh Thakkar',img:require('../../../assets/LocalImage/Ellipse11.png')},
    {title:'Adv. Sunny Jain',img:require('../../../assets/LocalImage/Ellipse9.png')},
    {title:'Adv. Rajesh Thakkar',img:require('../../../assets/LocalImage/Ellipse10.png')},
    {title:'Adv. Sunny Jain',img:require('../../../assets/LocalImage/Ellipse11.png')},
    
]