import React,{useState} from "react";
import { View, Text,Dimensions, FlatList,Image, ScrollView, TouchableOpacity } from "react-native";
import Menu from "../../../assets/Icon/Menu.svg";
import Bell from "../../../assets/Icon/Bell.svg";
import { ImageSlider } from "react-native-image-slider-banner";
import BottomTab from "../../../components/BottomTab";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import Call from "../../../assets/Icon/Call.svg";
import Gmail from "../../../assets/Icon/Gmail.svg";
import Whatsapp from "../../../assets/Icon/Whatsapp.svg";

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
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ height: 50, width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',paddingHorizontal: 20  }}>
                    <TouchableOpacity
                    onPress={()=>navigation.openDrawer()}
                    >
                    <Menu />
                    </TouchableOpacity>
                    <Bell />
                </View>
                <ScrollView style={{ }}>

                <View style={{alignItems:'center',justifyContent:'center',height:200,marginTop:20,paddingHorizontal: 20 }}>
                    <ImageSlider
                        data={[
                            { img: require('../../../assets/Banner/banner.png') },
                            { img: require('../../../assets/Banner/banner.png') },
                            { img: require('../../../assets/Banner/banner.png') }
                        ]}
                        localImg
                        // autoPlay={true}
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
                <View style={{marginTop:20,paddingHorizontal:10}}>
                    <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({item,index})=>(
                        <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={()=>onItemPress(item.name)}
                         style={{
                            backgroundColor:'#FCDA64BF',
                            width:'45%',
                            height:150,
                            alignItems:'center',
                            justifyContent:'center',
                            margin:10,
                            borderRadius:10,
                            shadowColor: '#FCDA64BF',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 2, height: 0 },
                            shadowRadius: 20,
                            elevation: 5,
                            }}>
                                <Image source={item.img}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-SemiBold',fontSize:12,marginTop:10}}>{item.name}</Text>

                        </TouchableOpacity>
                    )}
                    />
                </View>

            </ScrollView>
            <Modal isVisible={isVisible}>
                <View style={{ backgroundColor:'#FDEDB1',height:125,borderRadius:16,paddingLeft:20,width:'84%',alignSelf:'center' }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{fontSize:16,fontFamily:'Montserrat-SemiBold',color:'#000000',marginTop:20}}>Contact Us</Text>
                    <TouchableOpacity 
                    onPress={()=>setVisible(false)}
                     style={{marginRight:5,marginTop:-10}}>
                        <CircleCross/>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10,paddingRight:15}}>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',paddingTop:7}}>
                            <Call/>
                            <Text style={{marginTop:0,fontFamily:'Montserrat-Medium',color:'#000000',fontSize:14}}>Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                            <Gmail/>
                            <Text style={{marginTop:-10,fontFamily:'Montserrat-Medium',color:'#000000',fontSize:14}}>Gmail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',paddingTop:5}}>
                            <Whatsapp/>
                            <Text style={{marginTop:0,fontFamily:'Montserrat-Medium',color:'#000000',fontSize:14}}>Whatsapp</Text>
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
        img:require('../../../assets/LocalImage/image15.png'),
        name:'ZBW News'
    },
    {
        img:require('../../../assets/LocalImage/image16.png'),
        name:'Become a Member'
    },
    {
        img:require('../../../assets/LocalImage/image17.png'),
        name:'Secondary Member'
    },
    {
        img:require('../../../assets/LocalImage/image18.png'),
        name:'Complaints'
    },
    {
        img:require('../../../assets/LocalImage/image19.png'),
        name:'Events'
    },
    {
        img:require('../../../assets/LocalImage/image20.png'),
        name:'Our Partners'
    },
    {
        img:require('../../../assets/LocalImage/image23.png'),
        name:'Order Copies'
    },
    {
        img:require('../../../assets/LocalImage/image22.png'),
        name:'Price Chart'
    },
    {
        img:require('../../../assets/LocalImage/image24.png'),
        name:'Legal Support'
    },
]