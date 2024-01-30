import React, { useState,useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";
import axios from "axios";

const AddComplaints = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [loader,setLoader]=useState(false)
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phone,setPhone]=useState('')
    const [firmName,setFirmName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [description,setDescription]=useState('')
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const navigation = useNavigation()

    const handlePress=async()=>{
     const user_token =await AsyncStorage.getItem(Storage.user_token)
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(firstName==''){
           Toast.show('Please enter first name')
        }
        else if(lastName==''){
            Toast.show('Please enter last name')
        }
        else if(phone==''){
            Toast.show('Please enter phone number')
        }
        else if(phone.length<10){
            Toast.show('Please enter 10 digit phone number ')
        }
        else if(firmName==''){
            Toast.show('Please enter firm name')
        }
        else if(email==''){
            Toast.show('Please enter email address')
        }
        else if(reg.test(email) === false){
            Toast.show('Please enter valid email address')
        }
        else if(address==''){
            Toast.show('Please enter your full address')
        }
        else if(value==null){
            Toast.show('Please select issue type')
        }
        else if(description==''){
            Toast.show('Please enter description')
        }
        else{
            setLoader(true)
            let data = JSON.stringify({
                "accusedName":`${firstName} ${lastName}` ,
                "phone": phone,
                "firmName": firmName,
                "email": email,
                "address": address,
                "subject": value,
                "detail": description
              });
              
              let config = {
                method: 'post',
               
                url: 'http://45.79.123.102:49002/api/complaint/create/complain',
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `${user_token}`
                },
                data : data
              };
              
              axios.request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                Toast.show(response.data.message)
                navigation.goBack()
                setLoader(false)
              })
              .catch((error) => {
                console.log(error);
                setLoader(false)
              });
        }
        
    }
    const inputRef = useRef();
    return (
        <View style={styles.conatiner}>
            {loader?<Loader/>:null}
            <Header
                title={'Add Complaints'}
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.main}>
                <Text style={styles.view}>Opposite Party Details:</Text>
                <View style={{ marginTop: 18 }}>
                    <Text style={styles.first}>First Name</Text>
                    <View style={styles.inputView}>
                        <TextInput
                        value={firstName}
                        onChangeText={(val)=>setFirstName(val)}
                        style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Last Name</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                         value={lastName}
                         onChangeText={(val)=>setLastName(val)}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Phone Number</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                         value={phone}
                         onChangeText={(val)=>setPhone(val)}
                         maxLength={10}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                         keyboardType="number-pad"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Firm Name</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                         value={firmName}
                         onChangeText={(val)=>setFirmName(val)}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Email</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                         value={email}
                         onChangeText={(val)=>setEmail(val)}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                         keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Address</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                         value={address}
                         onChangeText={(val)=>setAddress(val)}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.row}>
                        <Text style={styles.type}>Issue Type</Text>
                    </View>
                    <View style={styles.inputView}>
                        <Dropdown
                            style={[styles.dropdown,]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select the option' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.space}>
                        <Text style={styles.issue}>Issue Description</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>inputRef.current.focus()}
                     style={styles.inputView1}>
                        <TextInput 
                         ref={inputRef}
                         value={description}
                         multiline
                         onChangeText={(val)=>setDescription(val)}
                         style={{fontSize:14,color:'#000000',fontFamily:'Montserrat-Medium'}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity 
                    onPress={()=>handlePress()}
                    style={styles.touch}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:40}}/>
            </ScrollView>
        </View>
    )
}
export default AddComplaints;
const styles = StyleSheet.create({
    dropdown: {
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#000000'
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Montserrat-Medium'
    },
    conatiner: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    main: {
        paddingHorizontal: 24,
        marginTop: 20
    },
    view: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#000000'
    },
    first: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    inputView: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FCDA64',
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    type: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    issue: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    inputView1: {
        height: 86,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FCDA64',
        marginTop: 5
    },
    buttonView: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touch: {
        height: 43,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCDA64',
        borderRadius: 20
    },
    submit: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 14
    }
});
const data = [
    { label: 'Theft', value: 'Theft' },
    { label: 'Robbery', value: 'Robbery' },
    { label: 'Cheating', value: 'Cheating' },
    { label: 'Extortion', value: 'Extortion' },
    { label: 'Labour issue', value: 'Labour issue' },
    { label: 'Return Of Property', value: 'Return Of Property' },
    { label: 'Other', value: 'Other' },
];
