import React,{useState} from "react";
import {View,Text} from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import BusinessDetail from "../../../components/BusinessDetail";
import Documentation from "../../../components/Documentation";
import PersonalDetail from "../../../components/PersonalDetail";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const renderScene = SceneMap({
    first: PersonalDetail,
    second: BusinessDetail,
    third:Documentation
});

const BecomeaMember=()=>{
    const navigation = useNavigation()
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Personal Detail ' },
      { key: 'second', title: 'Business Detail ' },
      { key: 'third', title: 'Documentation ' },
    ]);
  
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header
              title={"Become a Member"}
              onPress={()=>navigation.goBack()}
            />
            <View style={{flex:1}}>
            <TabView
                       navigationState={{ index, routes }}
                       renderScene={renderScene}
                       onIndexChange={setIndex}
                       initialLayout={{ width: '100%', }}
                       renderTabBar={props => <TabBar
                       indicatorStyle={{ 
                       height:2,
                       backgroundColor:'#000000'
                     
                       }}
                       renderLabel={({route, color,focused}) => (
                       <Text style={[{ 
                        color:focused?'#000000': 'grey',fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium',fontSize:14}]}>
                              {route.title}
                       </Text>
                        )}
                       {...props} 
                       style={{  
                        backgroundColor:'#FFFFFF',
                        marginVertical:4,
                        marginTop:5,
                        marginHorizontal:5,
                        elevation:0,
                        borderRadius:60
                    }}/>}
                       sceneContainerStyle={{backgroundColor:'#fff'}}
                    />
            </View>
        </View>
    )
}
export default BecomeaMember;