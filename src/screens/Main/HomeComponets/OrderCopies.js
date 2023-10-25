import React from "react";
import { View,Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import BlackEye from "../../../assets/Icon/BlackEye.svg";

const OrderCopies=()=>{
    const navigation=useNavigation()
    return(
        <View>
            <Header
              title={'Legal Support'}
              onPress={()=>navigation.goBack()}
            />
            <View style={{paddingHorizontal:25,marginTop:30}}>
                <FlatList
                data={data}
                renderItem={({item})=>(
                    <View style={{
                        width:'100%',
                        backgroundColor:'#FCDA6480',
                        borderRadius:20,
                        paddingHorizontal:14,
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        marginVertical:10,
                        paddingVertical:15,
                        shadowColor: '#FCDA6480',
                        shadowOpacity: 0.26,
                        shadowOffset: { width: 0, height: 2},
                        shadowRadius: 20,
                        elevation: 5,
                        }}>
                         <Text>{item.title}</Text>
                         <TouchableOpacity activeOpacity={0.5}>
                            <BlackEye/>
                         </TouchableOpacity>
                    </View>
                )}
                />
            </View>
        </View>
    )
}
export default OrderCopies;

const data=[
    {title:'ADG OF RAILWAY POLICE'},
    {title:'SENIOR PI LT MARG POLICE STATION'}
]