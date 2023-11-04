import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import BackArrow from "../../assets/Icon/BackArrow.svg";

const BusinessDetail=({onPress})=>{
    const [toggleCheckBox,setToggleCheckBox]=useState(false)
    return(
        <View style={styles.container}>
        <View style={styles.main}>
            <View style={{}}>
                <Text style={styles.heading}>Business Name</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>GST Number</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>Business Address</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>Location</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>Phone</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
            <View style={styles.view}>
                   <Text style={styles.heading}>Phone</Text>
                   <View style={styles.row}>
                       <CheckBox
                       style={{height:25,width:30}}
                       disabled={false}
                       value={toggleCheckBox}
                       onValueChange={(newValue) => setToggleCheckBox(newValue)}  
                       tintColors={{true: '#FCDA64', false: '#FCDA64'}}
                       onTintColor='#FCDA64'
                       onCheckColor='#FCDA64'            
                       />
                       <Text style={styles.same}>Same as personal</Text>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <View style={styles.view}>
                    <Text style={styles.heading}>Email</Text>
                    <View style={styles.row}>
                    <CheckBox
                       style={{height:25,width:30}}
                       disabled={false}
                       value={toggleCheckBox}
                       onValueChange={(newValue) => setToggleCheckBox(newValue)}  
                       tintColors={{true: '#FCDA64', false: '#FCDA64'}}
                       onTintColor='#FCDA64'
                       onCheckColor='#FCDA64'            
                       />
                       <Text style={styles.same}>Same as personal</Text>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View>
            
        </View>
        <View style={styles.bottom}>
                <TouchableOpacity 
                   onPress={onPress}
                   style={styles.back}>
                    <BackArrow/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>
                <View style={{width:40}}/>
            </View>
    </View>
    )
}
export default BusinessDetail;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    main:{
        paddingHorizontal:24,
        marginTop:30
    },
    heading:{
        color:'#000000',
        fontFamily:'Montserrat-Medium',
        fontSize:14
    },
    inputView:{
        height:40,
        width:'100%',
        borderWidth:1,
        borderColor:'#FCDA64',
        marginTop:5
    },
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    same:{
        fontSize:10,
        color:'#000000',
        fontFamily:'Montserrat-Regular'
    },
    bottom:{
        marginTop:128,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        position:'absolute',
        bottom:40,
        left:24,
        right:24
  },
  back:{
    alignItems:'center',
    justifyContent:'center',
    width:44,
    height:40,
    backgroundColor:'#000000',
    borderTopLeftRadius:80,
    borderTopRightRadius:40,
    borderBottomLeftRadius:80,
    borderBottomRightRadius:40
    },
    button:{
        height:43,
        width:130,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FCDA64',
        borderRadius:20
    },
    submit:{
        fontFamily:'Montserrat-Medium',
        color:'#000000',
        fontSize:14
    }
})