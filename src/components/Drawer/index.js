import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    LayoutAnimation,
    Alert,
} from 'react-native';
import DrawerLogo from "../../assets/Icon/DrawerLogo.svg";
import DrawerCross from "../../assets/Icon/DrawerCross.svg";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import styles from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from "../../components/LocalStorage";

const Drawer = () => {
    const navigation = useNavigation()

    const manageAbout=()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate('About')
    }
    const manageContact=()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate('Contact')
    }
    const manageTerm=()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate('Terms')
    }
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <DrawerLogo />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                    <DrawerCross />
                </TouchableOpacity>
            </View>
            <View style={styles.view1}>
                <TouchableOpacity
                onPress={()=>manageAbout()}
                >
                <Text style={styles.about}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>manageTerm()}
                >
                <Text style={styles.same}>Terms of Service</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>manageContact()}
                >
                <Text style={styles.same}>Contact us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    // Alert.alert("Confirmation","Are you sure you want to sign out ") 
                    Alert.alert('Confirmation', 'Are you sure you want to sign out', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () =>{
                        AsyncStorage.setItem(Storage.user_token,'')
                        navigation.navigate('Login')}},
                    ]);
                }}
                >
                <Text style={styles.same}>Sign out</Text>
                </TouchableOpacity>
                <Text style={styles.same}>Delete user</Text>
                <Text style={styles.same}>My QR Code</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.about}>Version 1.1</Text>
            </View>
        </View>
    )
}

export default Drawer;