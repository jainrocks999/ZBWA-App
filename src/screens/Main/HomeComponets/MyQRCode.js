import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Image from "react-native-scalable-image";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
const QRCode = () => {

  const [loader, setLoader] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
      apiCall()
  }, [])

  const apiCall = async () => {

      const user_token = await AsyncStorage.getItem(Storage.user_token)

      let config = {
          method: 'get',
          url: 'http://45.79.123.102:49002/api/homepage/my/qr/code',
          headers: {
              'Authorization': `${user_token}`
          }
      };
      setLoader(true)
      axios.request(config)
          .then((response) => {
              if (response.data.code == '200') {
                  Toast.show(response.data.message)
                  setData(response.data.data)
                  setLoader(false)
              }
              else {
                  setLoader(false)
                  Toast.show(response.data.message)
              }
              console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
              setLoader(false)
              console.log(error);
          });

  }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
           {loader?<Loader/>:null}
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
                {data?<Image
                    source={{ uri: data.qrcode }}
                />:null}
            </View>

        </View>
    )
}
export default QRCode;