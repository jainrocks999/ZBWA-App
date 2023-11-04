import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';


const AddComplaints = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const navigation = useNavigation()
    return (
        <View style={styles.conatiner}>
            <Header
                title={'Add Complaints'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <Text style={styles.view}>Opposite Party Details:</Text>
                <View style={{ marginTop: 18 }}>
                    <Text style={styles.first}>First Name</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Last Name</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Phone Number</Text>
                    <View style={styles.inputView}>
                        <TextInput />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.first}>Address</Text>
                    <View style={styles.inputView}>
                        <TextInput />
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
                    <View style={styles.inputView1}>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },

];
