import React,{useState,useEffect} from "react";
import { View, Text,Dimensions, FlatList,Image, ScrollView, TouchableOpacity,StyleSheet } from "react-native";
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
    const navigation=useNavigation()
    const [isVisible,setVisible]=useState(false)
    const [loader,setLoader]=useState(false)
    const [banner,setBanner]=useState([])

    useEffect(()=>{
        handleBannerData()
        // testingCase()
    },[])

    const testingCase=()=>{
        function bblSort(arr) {
 
            for (var i = 0; i < arr.length; i++) {
         
                // Last i elements are already in place  
                for (var j = 0; j < (arr.length - i - 1); j++) {
         
                    // Checking if the item at present iteration 
                    // is greater than the next iteration
                    if (arr[j] > arr[j + 1]) {
         
                        // If the condition is true
                        // then swap them
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }
         
            // Print the sorted array
            console.log(arr);
        }
         
        // This is our unsorted array
        var arr = [234, 43, 55, 63, 5, 6, 235, 547];
         
        // Now pass this array to the bblSort() function
        bblSort(arr);
        
    }

    const handleBannerData=async()=>{
        const user_token=await AsyncStorage.getItem(Storage.user_token)
        console.log('this is user token',user_token);
        let arr=[]
        setLoader(true)
        axios({
            method: 'get',
            url: 'http://45.79.123.102:49002/api/slider/all/1',
            headers: `Authorization: ${user_token}`
          })
          .then(function(response) {
            if(response.data.code=='200'){
                response.data.data.map((item)=>
                arr.push({img:item.banner})
                )
                setBanner(arr)
                console.log('this is response',response.data.data);
              setLoader(false)
            }
            else{
              setLoader(false)
              Toast.show(response.data.message )
            }
          })
          .catch(function(error) {
            setLoader(false)
            console.log("error", error.response.data)
            Toast.show(error.response.data.message)
          })
    }

    const onItemPress=(title)=>{
        if(title=='ZBW News'){
            navigation.navigate('ZBWNews')
        }
        else if(title=='Events'){
            navigation.navigate('Events')
        }
        else if(title=='Become a Member'){
            navigation.navigate('BecomeAMember')
        }
        else if(title=='Secondary Member'){
            navigation.navigate('SecondaryMember')
        }
        else if(title=='Legal Support'){
            navigation.navigate('LegalSupport')
        }
        else if(title=='Order Copies'){
            navigation.navigate('OrderCopies')
        }
        else if(title=='Complaints'){
            navigation.navigate('Complaints')
        }
        else if(title=='Price Chart'){
            navigation.navigate('Market')
        }
        else if(title=='Our Partners'){
            navigation.navigate('OurPartner')
        }
    }
console.log('this is aray forr banner',banner);
    return (
        <View style={styles.container}>
            {loader?<Loader/>:null}
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={()=>navigation.openDrawer()}
                    >
                    <Menu />
                    </TouchableOpacity>
                    <Bell />
                </View>
                <ScrollView style={{ }}>
                <View style={{alignItems:'flex-end'}}>
                    <Image 
                    style={styles.img}
                     source={require('../../../assets/HomeImage/image7.png')}/>
                  </View>
                <View style={styles.slider}>
                    <ImageSlider
                        data={banner}
                        // localImg
                        autoPlay={true}
                        preview
                        caroselImageContainerStyle={{
                            width: Dimensions.get('window').width
                        }}
                        caroselImageStyle={{
                            width: Dimensions.get('window').width-40,                            
                            height:180,
                            justifyContent:'space-between',
                            borderWidth:1,
                            borderRadius:20
                        }}
                        indicatorContainerStyle={{
                            bottom:-25
                        }}
                        inActiveIndicatorStyle={{
                           backgroundColor:'#000000',
                           height:8,
                           width:8
                        }}
                        activeIndicatorStyle={{
                           backgroundColor:'#FCDA64',
                           height:8,
                           width:8
                        }}
                    />
                </View>
                <View style={{marginTop:-24}}>
                    <Image style={styles.img1} source={require('../../../assets/HomeImage/image8.png')}/>
                </View>
                <View style={styles.view}>
                    <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({item,index})=>(
                        <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={()=>onItemPress(item.name)}
                         style={styles.item}>
                                {item.img}
                                <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <Modal isVisible={isVisible}>
                <View style={styles.modal}>
                    <View style={styles.row}>
                      <Text style={styles.contact}>Contact Us</Text>
                    <TouchableOpacity 
                    onPress={()=>setVisible(false)}
                     style={styles.touch}>
                        <CircleCross/>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.view1}>
                        <TouchableOpacity style={styles.touch1}>
                            <Call/>
                            <Text style={styles.text}>Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emailContainer}>
                            <Gmail/>
                            <Text style={styles.email}>Gmail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch2}>
                            <Whatsapp/>
                            <Text style={styles.text}>Whatsapp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <BottomTab 
            onPress={()=>setVisible(true)}
            />
        </View>
    )
}
export default HomeScreen;

const data=[
    {
        img:<Image15/>,
        name:'ZBW News'
    },
    {
        img:<Image16/>,
        name:'Become a Member'
    },
    {
        img:<Image17/>,
        name:'Secondary Member'
    },
    {
        img:<Image18/>,
        name:'Complaints'
    },
    {
        img:<Image19/>,
        name:'Events'
    },
    {
        img:<Image20/>,
        name:'Our Partners'
    },
    {
        img:<Image22/>,
        name:'Order Copies'
    },
    {
        img:<Image21/>,
        name:'Price Chart'
    },
    {
        img:<Image23/>,
        name:'Legal Support'
    },
]