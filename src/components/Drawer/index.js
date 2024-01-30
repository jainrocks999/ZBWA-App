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
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../components/Loader";

const Drawer = () => {
    const navigation = useNavigation()
    const [loader,setLoader]=useState(false)

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
    const manageQr=()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate('MyQRCode')
    }
    const handleLogout=async()=>{
        const user_token=await AsyncStorage.getItem(Storage.user_token)
        let config = {
            method: 'post',
            url: 'http://45.79.123.102:49002/api/user/logout',
            headers: { 
              'Authorization': `${user_token}`,
            }
          };
          setLoader(true)
          axios.request(config)
          .then((response) => {
            if(response.data.code=='200'){
                AsyncStorage.setItem(Storage.user_token,'')
                Toast.show(response.data.message)
                setLoader(false)
                navigation.replace('Login')
            }
            else{
                Toast.show(response.data.message)
                setLoader(false)
            }
          })
          .catch((error) => {
            setLoader(false)
          });
          
    }

    const handleDeleteUser=async()=>{
        const user_token=await AsyncStorage.getItem(Storage.user_token)
        let config = {
            method: 'post',
            url: 'http://45.79.123.102:49002/api/user/delete/user',
            headers: { 
              'Authorization': `${user_token}`,
            }
          };
          setLoader(true)
          axios.request(config)
          .then((response) => {
            if(response.data.code=='200'){
                AsyncStorage.setItem(Storage.user_token,'')
                Toast.show(response.data.message)
                setLoader(false)
                navigation.replace('Login')
            }
            else{
                Toast.show(response.data.message)
                setLoader(false)
            }
          })
          .catch((error) => {
            setLoader(false)
          });
          
    }

    return (
        <View style={styles.container}>
            {loader?<Loader/>:null}
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
                       handleLogout()
                    }},
                    ]);
                }}
                >
                <Text style={styles.same}>Sign out</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{
                    // Alert.alert("Confirmation","Are you sure you want to sign out ") 
                    Alert.alert('Confirmation', 'Are you sure you want to Delete user?', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () =>{
                        handleDeleteUser()
                    }},
                    ]);
                }}
                // onPress={()=>handleDeleteUser()}
                >
                <Text style={styles.same}>Delete user</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>manageQr()}>
                <Text style={styles.same}>My QR Code</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.about}>Version 1.1</Text>
            </View>
        </View>
    )
}

export default Drawer;