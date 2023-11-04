import React,{useState} from "react";
import { View, Text,Dimensions, FlatList,Image, ScrollView, TouchableOpacity,StyleSheet } from "react-native";
import Menu from "../../../assets/Icon/Menu.svg";
import Bell from "../../../assets/Icon/Bell.svg";
import { ImageSlider } from "react-native-image-slider-banner";
import BottomTab from "../../../components/BottomTab";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
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


const HomeScreen = () => {
    const navigation=useNavigation()
    const [isVisible,setVisible]=useState(false)


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

    return (
        <View style={styles.container}>
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
                        data={[
                            { img: require('../../../assets/Banner/banner.png') },
                            { img: require('../../../assets/Banner/banner.png') },
                            { img: require('../../../assets/Banner/banner.png') }
                        ]}
                        localImg
                        autoPlay={true}
                        preview
                        caroselImageContainerStyle={{
                            width: Dimensions.get('window').width
                        }}
                        caroselImageStyle={{
                            width: Dimensions.get('window').width-40,                            height:180,
                            justifyContent:'space-between'
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