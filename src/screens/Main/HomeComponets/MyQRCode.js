import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Storage from "../../../components/LocalStorage";
import Image from "react-native-scalable-image";
const QRCode = () => {
    const [qrcode, setQRCode] = useState('')

    useEffect(() => {
        loadQRCode()
    }, [])

    const loadQRCode = async () => {
        const qrcode = await AsyncStorage.getItem(Storage.qrcode)
        console.log(qrcode);
        setQRCode(qrcode)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
                width: 300,
                height: 300,
                borderWidth: 1,
                borderColor: '#FCDA64',
                marginBottom: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 20,
                elevation: 5,
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 10,
                paddingVertical: 12,
                alignItems:'center',
                justifyContent:'center'
            }}>
                {qrcode?<Image
                    source={{ uri: qrcode }}
                />:null}
            </View>

        </View>
    )
}
export default QRCode;