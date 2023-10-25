import React,{useState} from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import Arrow from "../../../assets/Icon/BlackArrow.svg";
import Computer from "../../../assets/Icon/computer.svg";
import { useNavigation } from "@react-navigation/native";
import Current from "../../../components/Current";
import Upcomming from "../../../components/Upcomming";
import Past from "../../../components/Past";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import LottieView from 'lottie-react-native';

const renderScene = SceneMap({
    first: Current,
    second: Upcomming,
    third:Past
  });


const Events = () => {

    const navigation = useNavigation()
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Current ' },
      { key: 'second', title: 'Upcoming' },
      { key: 'third', title: 'Past ' },
    ]);
  

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ width: '100%', height: 215, backgroundColor: '#FCDA64' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.5}
                        style={{
                            width: 50,
                            alignItems: 'center',
                            height: 40,
                            justifyContent: 'center'
                        }}>
                        <Arrow />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 16, color: '#000000' }}>Events</Text>
                    <View style={{ width: 46 }} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginTop: -20 }}>
                        {/* <Computer /> */}
                        <View style={{height:140}}>
        <LottieView style={{height:140,width:140}} source={require('../../../assets/Json/Event Animation.json')} autoPlay loop />
        </View>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', flex: 1, marginTop: -60, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
            <View style={{flex:1}}>
                    <TabView
                       navigationState={{ index, routes }}
                       renderScene={renderScene}
                       onIndexChange={setIndex}
                       initialLayout={{ width: '100%', }}
                       renderTabBar={props => <TabBar
                       indicatorStyle={{ 
                       height:0,
                     
                       }}
                       renderLabel={({route, color,focused}) => (
                       <Text style={[{ 
                        color:focused?'#000000': 'grey',fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium'}]}>
                              {route.title}
                       </Text>
                        )}
                       {...props} 
                       style={{  
                        backgroundColor:'#FFFFFF',
                        marginVertical:4,
                        marginTop:10,
                        marginHorizontal:5,
                        elevation:0,
                        borderRadius:60
                    }}/>}
                       sceneContainerStyle={{backgroundColor:'#fff'}}
                    />
                    </View>
            </View>
        </View>
    )
}
export default Events;
const styles= StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor:'red',
       // paddingTop:Platform.OS=='android'?0:40
    },
    card:
    {
       
    }, 
    main:
    {
        flexDirection:'row',
        paddingHorizontal:20,
        marginBottom:10,
        marginTop:20
    },
    imageContainer:
    {
        height:84,
        width:84,
        borderRadius:42
    },
    camera:
    {
        width:28,
        height:28, 
        shadowColor:'red',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{height:5,width:0},
        elevation:2,
        borderRadius:14,
        marginLeft:-28,marginTop:63,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    change:
    {
        fontSize:14,
        //fontSize: hp('1.9%'),
        marginHorizontal:15,
        marginTop:5,
        color:'red'
    },
    title:
    { 
        fontSize:14,
        fontFamily:'Montserrat-Medium' ,
    },
    buttomview:
    {
        bottom:0,
        left:0,
        right:0,
        position:'absolute'
    },
})
