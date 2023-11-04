import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DatePicker from 'react-native-date-picker'
import Claendar from "../../assets/Icon/Calendar.svg";


const PersonalDetail = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dob, setDob] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={{}}>
                    <Text style={styles.heading}>Address</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.heading}>Location</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.heading}>Pincode</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.heading}>Phone Number</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.heading}>Email</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.heading}>Emergency Number</Text>
                    <View style={styles.inputView}>
                        <TextInput />
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
            </View>
            <View style={styles.bottom}>

                <TouchableOpacity style={styles.touch1}>
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

                    var finalDate = [day, month, year].join('/');
                    setDob(finalDate)

                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
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
    }
})