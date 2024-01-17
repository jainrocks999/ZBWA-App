import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";
import HTMLView from "react-native-htmlview";
import Modal from "react-native-modal";
import RNFetchBlob from "rn-fetch-blob";

const EventDetails = ({ route }) => {
    const [isVisible, setVisible] = useState(false)
    const navigation = useNavigation()
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState()
    const [qrCode,setQrCode]=useState('')
    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        const user_token = await AsyncStorage.getItem(Storage.user_token)
        setLoader(true)
        axios({
            method: 'get',
            url: `http://45.79.123.102:49002/api/event/details/${route.params.id}`,
            headers: `Authorization: ${user_token}`
        })
            .then(function (response) {
                if (response.data.code == '200') {
                    setData(response.data.data)
                    setLoader(false)
                }
                else {
                    setLoader(false)
                    Toast.show(response.data.message)
                }
            })
            .catch(function (error) {
                setLoader(false)
                Toast.show(error.response.data.message)
            })
    }


    const renderDate = (date) => {
        var d = new Date(date)
        month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        var finalDate = [month, day, year].join('/');
        return (
            <Text style={{ color: '#000', fontFamily: 'Montserrat-Medium', fontSize: 13 }}>{finalDate}</Text>
        )
    }


    const handleApplyEvents = async (id) => {

        const user_token = await AsyncStorage.getItem(Storage.user_token)
        let data = '';

        let config = {
            method: 'post',
            url: `http://45.79.123.102:49002/api/event/apply/event/${id}`,
            headers: {
                'Authorization': `${user_token}`,
                // 'Cookie': 'serv_app_zaveri=s%3Av6ba0gxNaizNDxd6SWf5FLmz-RHARUBk.6pns387tK1qMEqBKGAZUkWTyJyvPmocZWvHcYNcA2vA'
            },
            data: data
        };
        setLoader(true)
        try {
            axios.request(config)
            .then((response) => {
                console.log("response=================",response);
                if(response.data.code=='200'){
                setQrCode(response.data.qr)
                AsyncStorage.setItem(Storage.qrcode,response.data.qr)
                setVisible(true)
                setLoader(false)
                }
                else{
                    Toast.show(response.data.msg) 
                    setLoader(false)
                }
            })
            .catch((error) => {
                Toast.show(error.response.data.message)
                console.log("response=================",id,error.response.data);
                setLoader(false)
            });

        } catch (error) {
            console.log('this is error',error);
        }
       

    }

    const saveToGallery=()=>{
        const base64Image=qrCode
        var Base64Code = base64Image.split("data:image/png;base64,"); //base64Image is my image base64 string
        const dirs = RNFetchBlob.fs.dirs;
        var path = dirs.DCIMDir + "/image.png";
        RNFetchBlob.fs.writeFile(path, Base64Code[1], 'base64')
            .then((res) => { console.log("File : ", res)
            Toast.show('QR Code saved successfully')
            setVisible(false)
         });
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {loader ? <Loader /> : null}
            <Header
                title={"Event Details"}
                onPress={() => navigation.goBack()}
            />
            {data ? <ScrollView>
                {data.images[0].image?
                <Image
                    width={Dimensions.get('window').width}
                    source={{ uri: data.images[0].image }}>
                </Image>:
                <View style={{
                    width:Dimensions.get('window').width - 50,
                    height:105,
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                    <Text>Image not Found</Text>
                    </View>
                }
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Montserrat-SemiBold' }}>{data.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                        {renderDate(data.date)}
                        <Text style={{ color: '#000', fontFamily: 'Montserrat-Medium', fontSize: 13, marginLeft: 20 }}>{data.time}</Text>
                    </View>
                    {/* <Text lineBreakMode="tail">{data.description}</Text> */}
                    <View style={{ marginTop: 5 }}>
                        <HTMLView
                            value={data.description.trim()
                                .replace(new RegExp('<p>', 'g'), '<span>')}
                            addLineBreaks={false}
                        />
                    </View>

                </View>
                <View style={{height:100}}/>
            </ScrollView> : null}
            <Modal isVisible={isVisible}>
                <View style={{
                    backgroundColor: '#FFF',
                    borderRadius: 16,
                    paddingBottom: 20,

                }}>
                    {/* <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={{ alignSelf: 'flex-end', margin: 5 }}>
                        <CircleCross />
                    </TouchableOpacity> */}
                    <View style={{alignItems:'center'}}>
                        <Image
                         source={{uri:qrCode}}
                        />
                        <TouchableOpacity
                        onPress={()=>saveToGallery()}
                         style={{backgroundColor:'#FCDA64',marginTop:20,paddingVertical:10,paddingHorizontal:10,borderRadius:6}}>
                            <Text style={{color:'#fff',fontFamily:'Montserrat-SemiBold',fontSize:14,marginTop:-2,}}>Save to Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
           
            <View style={{
                position: 'absolute',
                bottom: 20,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    onPress={() =>
                        handleApplyEvents(data._id)
                        // setVisible(true)
                    }
                    style={{
                        backgroundColor: '#FCDA64',
                        width: '90%',
                        marginHorizontal: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 45,
                        borderRadius:6
                    }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat-Bold', marginTop: -3 }}>Apply Event</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default EventDetails;