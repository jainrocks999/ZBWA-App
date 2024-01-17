import React,{useState,useEffect} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import BackArrow from "../../assets/Icon/BackArrow.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../components/LocalStorage";
import Toast from "react-native-simple-toast";


const BusinessDetail=({onPress})=>{
    const [toggleCheckBox,setToggleCheckBox]=useState(false)
    const [name,setName]=useState('')
    const [gst,setGst]=useState('')
    const [address,setAddress]=useState('')
    const [location,setLocation]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')


    useEffect(()=>{
      handleLoad()
    },[])

    const handleLoad=async()=>{

        const name=await AsyncStorage.getItem(Storage.businessName)
        const gst=await AsyncStorage.getItem(Storage.businessGst)
        const address=await AsyncStorage.getItem(Storage.businessAddress)
        const location=await AsyncStorage.getItem(Storage.businessLocation)
        const phone=await AsyncStorage.getItem(Storage.businessPhone)
        const email=await AsyncStorage.getItem(Storage.businessEmail)
 
        setName(name)
        setGst(gst)
        setAddress(address)
        setLocation(location)
        setPhone(phone)
        setEmail(email)
    }

    const handleBusinessDetails=()=>{
        if(name==''){
          Toast.show('Please enter your name')
        }
        else if(gst==''){
            Toast.show('Please enter your GST Number')
        }
        else if(address==''){
            Toast.show('Please enter your business address')
        }
        else if(location==''){
            Toast.show('Please enter your location')
        }
        else if(phone==''){
            Toast.show('Please enter your phone number')
        }
        else if(email==''){
            Toast.show('Please enter your email address')
        }
        else{
            AsyncStorage.setItem(Storage.businessName,name)
            AsyncStorage.setItem(Storage.businessGst,gst)
            AsyncStorage.setItem(Storage.businessAddress,address)
            AsyncStorage.setItem(Storage.businessLocation,location)
            AsyncStorage.setItem(Storage.businessPhone,phone)
            AsyncStorage.setItem(Storage.businessEmail,email)
            Toast.show('Business Details Saved Successfully!')
        }
    }


    return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
        <View style={styles.main}>
            <View style={{}}>
                <Text style={styles.heading}>Business Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                    value={name}
                    onChangeText={(val)=>setName(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                    />
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>GST Number</Text>
                <View style={styles.inputView}>
                    <TextInput
                    value={gst}
                    onChangeText={(val)=>setGst(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                    />
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>Business Address</Text>
                <View style={styles.inputView}>
                    <TextInput
                    value={address}
                    onChangeText={(val)=>setAddress(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}} 
                    />
                </View>
            </View>
            <View style={{marginTop:15}}>
                <Text style={styles.heading}>Location</Text>
                <View style={styles.inputView}>
                    <TextInput
                    value={location}
                    onChangeText={(val)=>setLocation(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                    />
                </View>
            </View>
            {/* <View style={{marginTop:15}}>
                <Text style={styles.heading}>Phone</Text>
                <View style={styles.inputView}>
                    <TextInput/>
                </View>
            </View> */}
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
                    <TextInput
                    value={phone}
                    onChangeText={(val)=>setPhone(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}} 
                    keyboardType="number-pad"
                    />
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
                    <TextInput 
                    value={email}
                    onChangeText={(val)=>setEmail(val)} 
                    style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                    keyboardType="email-address"
                    />
                </View>
            </View>
            
        </View>
        <View style={{height:214}}/>
        {/* height:214 */}
        <View style={styles.bottom}>
                <TouchableOpacity 
                   onPress={onPress}
                   style={styles.back}>
                    <BackArrow/>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>handleBusinessDetails()}
                 style={styles.button}>
                    <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>
                <View style={{width:40}}/>
            </View>
            </ScrollView>
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