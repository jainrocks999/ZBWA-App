import React, { useState,useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import DatePicker from 'react-native-date-picker'
import Claendar from "../../assets/Icon/Calendar.svg";
import Toast from "react-native-simple-toast";
import Storage from "../../components/LocalStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";


const PersonalDetail = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [address,setAddress]=useState('')
    const [location,setLocation]=useState('')
    const [pincode,setPincode]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [emergencyNumber,setEmergencyNumber]=useState('')
    const [dob, setDob] = useState('')
    const [fields, setFields] = useState([""]);

    useEffect(()=>{
         handleLoad()
    },[])

    const handleLoad=async()=>{
      const address=await AsyncStorage.getItem(Storage.personalAddress)
      const location=await AsyncStorage.getItem(Storage.personalLocation)
      const pincode=await AsyncStorage.getItem(Storage.personalPincode)
      const phone=await AsyncStorage.getItem(Storage.personalPhoneNumber)
      const email=await AsyncStorage.getItem(Storage.personalEmail)
      const emergencyNumber=await AsyncStorage.getItem(Storage.personalEmergencyNumber)
      const dob=await AsyncStorage.getItem(Storage.personalDob)
      setAddress(address)
      setLocation(location)
      setPincode(pincode)
      setPhone(phone)
      setEmail(email)
      setEmergencyNumber(emergencyNumber)
      setDob(dob)
      console.log('this is saved address',address);
    }


    const handlePersonalDetails=()=>{
        if(address==''){
            Toast.show('Please enter your address')
        }
        else if(location==''){
            Toast.show('Please enter your location')
        }
        else if(pincode==''){
            Toast.show('Please enter your pincode number')
        }
        else if(phone==''){
            Toast.show('Please enter your phone number')
        }
        else if(email==''){
            Toast.show('Please enter your email address')
        }
        else if(emergencyNumber==''){
            Toast.show('Please enter your emergency number')
        }
        else if(dob==''){
            Toast.show('Please enter DOB')
        }
        else{
            AsyncStorage.setItem(Storage.personalAddress,address)
            AsyncStorage.setItem(Storage.personalLocation,location)
            AsyncStorage.setItem(Storage.personalPincode,pincode)
            AsyncStorage.setItem(Storage.personalPhoneNumber,phone)
            AsyncStorage.setItem(Storage.personalEmail,email)
            AsyncStorage.setItem(Storage.personalEmergencyNumber,emergencyNumber)
            AsyncStorage.setItem(Storage.personalDob,dob)
            AsyncStorage.setItem(Storage.addMoreArray,JSON.stringify(fields))
            Toast.show('Personal Details Saved Successfully!')
        }
    }

    function handleChange(i, event) {
        console.log('this is index and event', i, event);
        const values = [...fields];
        values[i] = event;
        setFields(values);
    }

    console.log('this is field value',fields.join(','));

    function handleAdd() {
        const values = [...fields];
        values.push("");
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    return (
        <View style={styles.container}>

            <ScrollView style={{ flex: 1 }}>
                <View style={styles.main}>
                    <View style={{}}>
                        <Text style={styles.heading}>Address</Text>
                        <View style={styles.inputView}>
                            <TextInput 
                            value={address}
                            onChangeText={(val)=>setAddress(val)}
                            style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>Location</Text>
                        <View style={styles.inputView}>
                            <TextInput
                             value={location}
                             onChangeText={(val)=>setLocation(val)}
                             style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}} 
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>Pincode</Text>
                        <View style={styles.inputView}>
                            <TextInput 
                             value={pincode}
                             onChangeText={(val)=>setPincode(val)}
                             style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                             keyboardType="number-pad"
                             maxLength={6}
                           />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>Phone Number</Text>
                        <View style={styles.inputView}>
                            <TextInput 
                             value={phone}
                             onChangeText={(val)=>setPhone(val)}
                             style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                             keyboardType="number-pad"
                           />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>Email</Text>
                        <View style={styles.inputView}>
                            <TextInput 
                             value={email}
                             onChangeText={(val)=>setEmail(val)}
                             style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                             keyboardType="email-address"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>Emergency Number</Text>
                        <View style={styles.inputView}>
                            <TextInput 
                             value={emergencyNumber}
                             onChangeText={(val)=>setEmergencyNumber(val)}
                             style={{color:'#000000',fontSize:14,fontFamily:'Montserrat-Medium'}}
                             keyboardType="number-pad"
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.heading}>DOB</Text>
                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={styles.touch}>
                            <Text style={styles.dob}>{dob}</Text>
                            <Claendar />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <View>
                            <TouchableOpacity
                                onPress={() => handleAdd()}
                                style={styles.buttton}>
                                <Text style={styles.text}> Add More </Text>
                            </TouchableOpacity>
                        </View>
                        {fields.map((field, idx) => {
                            return (
                                <View style={[styles.inputView, {
                                    marginTop: 15,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: 10
                                }]}>
                                    <TextInput
                                        style={{ width: '90%', }}
                                        value={field || ""}
                                        onChangeText={(e) => handleChange(idx, e)}
                                    />
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#FCDA64',
                                            alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6, paddingVertical: 4
                                        }}
                                        onPress={() => handleRemove(idx)}>
                                        <Text style={{ fontSize: 11, fontFamily: 'Montserrat-Bold', color: '#fff' }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                   
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity 
                    onPress={()=>handlePersonalDetails()}
                    style={styles.touch1}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode={'date'}
                    maximumDate={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        // setDate(date)
                        var d = date
                        month = '' + (d.getMonth() + 1),
                            day = '' + d.getDate(),
                            year = d.getFullYear();

                        if (month.length < 2)
                            month = '0' + month;
                        if (day.length < 2)
                            day = '0' + day;

                        var finalDate = [month , day, year].join('/');
                        setDob(finalDate)

                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <View style={{ height: 140 }} />
            </ScrollView>
        </View>
    )
}
export default PersonalDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    main: {
        paddingHorizontal: 24,
        marginTop: 30
    },
    heading: {
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
    touch: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FCDA64',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7
    },
    dob: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    bottom: {
        marginTop: 128,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        left: 24,
        right: 24
    },
    touch1: {
        height: 43,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCDA64',
        borderRadius: 20
    },
    text: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 14
    },
    buttton: {
        backgroundColor: "#FCDA64",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        paddingVertical: 6,
        paddingHorizontal: 4
    },
    text: { fontSize: 12, fontFamily: "Montserrat-SemiBold", color: "#000" },
})