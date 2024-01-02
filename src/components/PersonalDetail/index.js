import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import DatePicker from 'react-native-date-picker'
import Claendar from "../../assets/Icon/Calendar.svg";


const PersonalDetail = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dob, setDob] = useState('')
    const [fields, setFields] = useState([""]);

    function handleChange(i, event) {
        console.log('this is index and event', i, event);
        const values = [...fields];
        values[i] = event;
        setFields(values);
    }

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

                    <View style={{ marginTop: 15 }}>
                        <View>
                            <TouchableOpacity
                                // onPress={() => setNumTextInputs(val => val + 1)}
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