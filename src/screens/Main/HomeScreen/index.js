import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from "react-native";
import Menu from "../../../assets/Icon/Menu.svg";
import Bell from "../../../assets/Icon/Bell.svg";
import { ImageSlider } from "react-native-image-slider-banner";
import BottomTab from "../../../components/BottomTab";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import axios from "axios";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";
import Storage from "../../../components/LocalStorage";
import styles from "./style";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import Call from "../../../assets/Icon/Call.svg";
import Gmail from "../../../assets/Icon/Gmail.svg";
import Whatsapp from "../../../assets/Icon/Whatsapp.svg";
import Image15 from "../../../assets/HomeImage/image15.svg";
import Image16 from "../../../assets/HomeImage/image16.svg";
import Image17 from "../../../assets/HomeImage/image17.svg";
import Image18 from "../../../assets/HomeImage/image18.svg";
import Image19 from "../../../assets/HomeImage/image19.svg";
import Image20 from "../../../assets/HomeImage/image20.svg";
import Image21 from "../../../assets/HomeImage/image21.svg";
import Image22 from "../../../assets/HomeImage/image22.svg";
import Image23 from "../../../assets/HomeImage/image23.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = () => {
    const navigation = useNavigation()
    const [isVisible, setVisible] = useState(false)
    const [isPremium,setPremium]=useState(false)
    const [loader, setLoader] = useState(false)
    const [banner, setBanner] = useState([])
    const [contact,setContact]=useState()

    useEffect(() => {
        handleBannerData()
    }, [])

    useEffect(() => {
        apiCall()
        handleMember()
    }, [])

    const handleMember=async()=>{
        const user_token = await AsyncStorage.getItem(Storage.user_token)
        let config = {
            method: 'get',
            url: 'http://45.79.123.102:49002/api/user/check/my/status',
            headers: {
                'Authorization': `${user_token}`
            }
        };
        setLoader(true)
        axios.request(config)
            .then((response) => {
                console.log('this is response',response.data);
                if (response.data.code == '200') {
                    // setContact(response.data.data)
                    setLoader(false)
                }
                else {
                    setLoader(false)
                    Toast.show(response.data.message)
                }
            })
            .catch((error) => {
                setLoader(false)
                console.log(error);
            });


    }

    const apiCall = async () => {
        const user_token = await AsyncStorage.getItem(Storage.user_token)
        let config = {
            method: 'get',
            url: 'http://45.79.123.102:49002/api/homepage/contact/us',
            headers: {
                'Authorization': `${user_token}`
            }
        };
        setLoader(true)
        axios.request(config)
            .then((response) => {
                if (response.data.code == '200') {
                    // Toast.show(response.data.message)
                    setContact(response.data.data)
                    setLoader(false)
                }
                else {
                    setLoader(false)
                    Toast.show(response.data.message)
                }
            })
            .catch((error) => {
                setLoader(false)
                console.log(error);
            });

    }

    const handleBannerData = async () => {
        const user_token = await AsyncStorage.getItem(Storage.user_token)
        let arr = []
        setLoader(true)
        axios({
            method: 'get',
            url: 'http://45.79.123.102:49002/api/slider/all',
            headers: `Authorization: ${user_token}`
        })
            .then(function (response) {
                if (response.data.code == '200') {
                    response.data.data.map((item) =>
                        arr.push({ img: item.banner })
                    )
                    setBanner(arr)
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

    const onItemPress = async(title) => {
        const user_token=await AsyncStorage.getItem(Storage.user_token)
        if (title == 'ZBW News') {
            navigation.navigate('ZBWNews')
        }
        else if (title == 'Events') {
            navigation.navigate('Events')
        }
        else if (title == 'Become a Member') {
            navigation.navigate('BecomeAMember')
        }
        else if (title == 'Secondary Member') {

            let config = {
                method: 'get',
                url: 'http://45.79.123.102:49002/api/member/secondary/member/list',
                headers: { 
                  'Authorization': `${user_token}`
                }
              };
              setLoader(true)
              axios.request(config)
              .then((response) => {
                if(response.data.code=='200'){
                    setLoader(false)
                    navigation.navigate('SecondaryMember')
                }
                else{
                    setLoader(false)
                    setPremium(true)
                }
              })
              .catch((error) => {
                setLoader(false)
                console.log(error.response.data);
              });

            // navigation.navigate('SecondaryMember')
        }
        else if (title == 'Legal Support') {
        let config = {
            method: 'get',
            url: 'http://45.79.123.102:49002/api/legalsupport/all/1',
            headers: { 
              'Authorization': `${user_token}`
            }
          };
          setLoader(true)
          axios.request(config)
          .then((response) => {
            if(response.data.code=='200'){
                setLoader(false)
                navigation.navigate('LegalSupport')
            }
            else{
                setLoader(false)
                setPremium(true)
            }
          })
          .catch((error) => {
            setLoader(false)
            console.log(error);
          });
        }
        else if (title == 'Order Copies') {
            // navigation.navigate('OrderCopies')
            let config = {
                method: 'get',
                url: 'http://45.79.123.102:49002/api/ordercopie/all/1',
                headers: { 
                  'Authorization': `${user_token}`
                }
              };
              setLoader(true)
              axios.request(config)
              .then((response) => {
                if(response.data.code=='200'){
                    setLoader(false)
                    navigation.navigate('OrderCopies')
                }
                else{
                    setLoader(false)
                    setPremium(true)
                }
              })
              .catch((error) => {
                setLoader(false)
                console.log(error);
              });

        }
        else if (title == 'Complaints') {
            // navigation.navigate('Complaints')
            let config = {
                method: 'get',
                url: 'http://45.79.123.102:49002/api/complaint/all',
                headers: { 
                  'Authorization': `${user_token}`
                }
              };
              setLoader(true)
              axios.request(config)
              .then((response) => {
                if(response.data.code=='200'){
                    setLoader(false)
                    navigation.navigate('Complaints')
                }
                else{
                    setLoader(false)
                    setPremium(true)
                }
              })
              .catch((error) => {
                setLoader(false)
                console.log(error);
              });
        }
        else if (title == 'Price Chart') {
            navigation.navigate('Market')
        }
        else if (title == 'Our Partners') {
            navigation.navigate('OurPartner')
        }
    }
    return (
        <View style={styles.container}>
            {loader ? <Loader /> : null}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Menu />
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('Notification')}
                 >
                <Bell />
                </TouchableOpacity>
            </View>
            <ScrollView style={{}}>
                <View style={{ alignItems: 'flex-end' }}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/HomeImage/image7.png')} />
                </View>
                <View style={styles.slider}>
                    {banner.length > 1 ? <ImageSlider
                    
                        data={banner}
                        // localImg
                        autoPlay={true}
                        preview={false}
                        caroselImageContainerStyle={{
                            width: Dimensions.get('window').width,
                            // paddingRight:10,
                            marginRight:0
                        }}
                    
                        caroselImageStyle={{
                            width: Dimensions.get('window').width-40,
                            height: 180,
                            justifyContent: 'space-between',
                            borderWidth: 1,
                            borderRadius: 20,
                            marginLeft:20
                        }}
                        indicatorContainerStyle={{
                            bottom: -25
                        }}
                        inActiveIndicatorStyle={{
                            backgroundColor: '#000000',
                            height: 8,
                            width: 8
                        }}
                        activeIndicatorStyle={{
                            backgroundColor: '#FCDA64',
                            height: 8,
                            width: 8
                        }}
                    /> :
                        <View style={{ marginTop: -20 }}>
                            <Image
                                resizeMode="center"
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    height: 180, borderWidth: 1,
                                    borderRadius: 20
                                }}
                                source={{ uri: banner[0]?.img }} />
                        </View>
                    }
                </View>
                <View style={{ marginTop: -24 }}>
                    <Image style={styles.img1} source={require('../../../assets/HomeImage/image8.png')} />
                </View>
                <View style={styles.view}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => onItemPress(item.name)}
                                style={styles.item}>
                                {item.img}
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <Modal isVisible={isVisible}>
                <View style={{ backgroundColor: '#FDEDB1', 
        height: 125, 
        borderRadius: 16, 
        paddingLeft: 20, 
        width: '84%', 
        alignSelf: 'center' }}>
                    <View style={styles.row}>
                        <Text style={styles.contact}>Contact Us</Text>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            style={styles.touch}>
                            <CircleCross />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view1}>
                        <TouchableOpacity
                        onPress={()=>{
                            setVisible(false)
                            Linking.openURL(`tel:${contact.phone}`)
                           
                        }}
                         style={styles.touch1}>
                            <Call />
                            <Text style={styles.text}>Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=>{
                            setVisible(false)
                            Linking.openURL(`mailto:${contact.email}`)
                            // Linking.openURL(`tel:${contact.phone}`)
                           
                        }}
                         style={styles.emailContainer}>
                            <Gmail />
                            <Text style={styles.email}>Gmail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=>{
                            Linking.openURL(`whatsapp://send?text= &phone=  ${contact.whatsapp};`)
                            setVisible(false)
                        }}
                         style={styles.touch2}>
                            <Whatsapp />
                            <Text style={styles.text}>Whatsapp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isPremium}>
                <View style={styles.modal}>
                    <View style={{alignItems:'center',marginTop:10}}>
                        <Text style={{color:'#000',fontFamily:'Montserrat-Bold',fontSize:18}}>Go Pro!</Text>
                    </View>
                    <View style={{alignItems:'center',marginTop:10}}>
                        <Text style={{color:'#000',fontFamily:'Montserrat-SemiBold',fontSize:14,textAlign:'center'}}>{'Become a member and join access to all the premium features'}</Text>
                    </View>
                    <View style={styles.view1}>
                    <FlatList
                        data={data1}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                // onPress={() => onItemPress(item.name)}
                                style={styles.item}>
                                {item.img}
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    </View>
                    <View style={{alignItems:'center',marginTop:20,marginBottom:20}}>
                        <TouchableOpacity
                        onPress={()=>{
                            onItemPress('Become a Member')
                            setPremium(false)
                        }}
                        style={{
                            backgroundColor:'#fff',
                            paddingHorizontal:20,
                            paddingVertical:10,
                            borderRadius:10
                        }}>
                            <Text style={{fontSize:16,color:'#000',fontFamily:'Montserrat-Bold'}}>Become a member</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',marginBottom:20}}>
                        <Text onPress={()=>setPremium(false)} style={{fontSize:18,fontFamily:'Montserrat-Bold',color:'#000'}}>NO THANKS</Text>
                    </View>
                </View>
            </Modal>

            <BottomTab
                onPress={() => setVisible(true)}
            />
        </View>
    )
}
export default HomeScreen;

const data1=[
    {
        img: <Image18 />,
        name: 'Complaints'
    },
    {
        img: <Image17 />,
        name: 'Secondary Member'
    },
    {
        img: <Image22 />,
        name: 'Order Copies'
    },
    {
        img: <Image23 />,
        name: 'Legal Support'
    },
    
]

const data = [
    {
        img: <Image15 />,
        name: 'ZBW News'
    },
    {
        img: <Image16 />,
        name: 'Become a Member'
    },
    {
        img: <Image17 />,
        name: 'Secondary Member'
    },
    {
        img: <Image18 />,
        name: 'Complaints'
    },
    {
        img: <Image19 />,
        name: 'Events'
    },
    {
        img: <Image20 />,
        name: 'Our Partners'
    },
    {
        img: <Image22 />,
        name: 'Order Copies'
    },
    {
        img: <Image21 />,
        name: 'Price Chart'
    },
    {
        img: <Image23 />,
        name: 'Legal Support'
    },
]