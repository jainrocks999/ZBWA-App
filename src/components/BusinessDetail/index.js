import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const BusinessDetail=()=>{
    const [toggleCheckBox,setToggleCheckBox]=useState(false)
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
        <View style={{paddingHorizontal:24,marginTop:30}}>
            <View style={{}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Business Name</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>GST Number</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Business Address</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Location</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Phone</Text>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Phone</Text>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                       <CheckBox
                       style={{height:25,width:30}}
                       disabled={false}
                       value={toggleCheckBox}
                       onValueChange={(newValue) => setToggleCheckBox(newValue)}  
                       tintColors={{true: '#FCDA64', false: '#FCDA64'}}
                       onTintColor='#FCDA64'
                       onCheckColor='#FCDA64'            
                       />
                       <Text style={{fontSize:10,color:'#000000',fontFamily:'Montserrat-Regular'}}>Same as personal</Text>
                    </View>
                </View>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Email</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <CheckBox
                       style={{height:25,width:30}}
                       disabled={false}
                       value={toggleCheckBox}
                       onValueChange={(newValue) => setToggleCheckBox(newValue)}  
                       tintColors={{true: '#FCDA64', false: '#FCDA64'}}
                       onTintColor='#FCDA64'
                       onCheckColor='#FCDA64'            
                       />
                       <Text style={{fontSize:10,color:'#000000',fontFamily:'Montserrat-Regular'}}>Same as personal</Text>
                    </View>
                </View>
                <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                    <TextInput/>
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
export default BusinessDetail;