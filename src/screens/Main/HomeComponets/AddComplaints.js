import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';


const AddComplaints=()=>{
    const [toggleCheckBox,setToggleCheckBox]=useState(false)
    const navigation =useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header
             title={'Add Complaints'}
             onPress={()=>navigation.goBack()}
            />
        <View style={{paddingHorizontal:24,marginTop:20}}>
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:14,color:'#000000'}}>Opposite Party Details:</Text>
            <View style={{marginTop:18}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>First Name</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Last Name</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Phone Number</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Firm Name</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Address</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Issue Type</Text>
                </View>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput placeholder="Select the option" placeholderTextColor={'#000000'}/>
                    {/* <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> */}

                </View>
            </View>
            <View style={{marginTop:15}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Issue Description</Text>
                </View>
                <View style={{height:86,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput />
                </View>
            </View>
            <View style={{marginTop:40,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{
                    height:43,
                    width:130,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#FCDA64',
                    borderRadius:20
                }}>
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#000000',fontSize:14}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}
export default AddComplaints;