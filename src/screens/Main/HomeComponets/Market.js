import react from "react";
import { View,Text } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Metal from "../../../assets/LocalImage/Metal.svg";

const Market=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header
            title={'Market'} 
            onPress={()=>navigation.goBack()}
            />
            <View style={{paddingHorizontal:20,marginTop:30}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:'30%',height:100,borderRadius:10,backgroundColor:'#CDAA35',alignItems:'center',paddingVertical:10}}>
                      <Metal/>
                      <Text style={{fontFamily:'Montserrat-SemiBold',color:'#FFFFFF',fontSize:14,marginTop:10}}>Gold</Text>
                      <Text style={{color:'#FFFFFF',fontSize:12,fontFamily:'Montserrat-Medium',marginTop:15}}>$1887.51</Text>
                    </View>
                    <View style={{width:'30%',height:100,borderRadius:10,backgroundColor:'#808080',alignItems:'center',paddingVertical:10}}>
                    <Metal/>
                      <Text style={{fontFamily:'Montserrat-SemiBold',color:'#FFFFFF',fontSize:14,marginTop:10}}>Silver</Text>
                      <Text style={{color:'#FFFFFF',fontSize:12,fontFamily:'Montserrat-Medium',marginTop:15}}>$22.15</Text>
                    </View>
                    <View style={{width:'30%',height:100,borderRadius:10,backgroundColor:'#E5E4E2',alignItems:'center',paddingVertical:10}}>
                    <Metal/>
                      <Text style={{fontFamily:'Montserrat-SemiBold',color:'#000000',fontSize:14,marginTop:10}}>Platinum</Text>
                      <Text style={{color:'#000000',fontSize:12,fontFamily:'Montserrat-Medium',marginTop:15}}>$870.79</Text>
                    </View>
               </View>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:60}}>
                <Text style={{width:'30%'}}></Text>
                <Text style={{color:'#000000',fontFamily:'Montserrat-SemiBold',fontSize:14,width:'30%',textAlign:'center'}}>Buy</Text>
                <Text style={{color:'#000000',fontFamily:'Montserrat-SemiBold',fontSize:14,width:'30%',textAlign:'center'}}>Sell</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',width:'30%'}}>
                  <View style={{backgroundColor:'#CDAA35',height:16,width:16,borderRadius:16}}></View>
                  <Text style={{marginLeft:15,fontFamily:'Montserrat-SemiBold',fontSize:14,color:'#000000'}}>Gold</Text>
                </View>
                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$1887.51</Text>
                  <Text style={{color:'#FF0A0A',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$1887.41</Text>
                </View>

                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$1887.51</Text>
                  <Text style={{color:'#05FF00',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$1887.55</Text>
                </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',width:'30%'}}>
                  <View style={{backgroundColor:'#808080',height:16,width:16,borderRadius:16}}></View>
                  <Text style={{marginLeft:15,fontFamily:'Montserrat-SemiBold',fontSize:14,color:'#000000'}}>Silver</Text>
                </View>
                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$22.11</Text>
                  <Text style={{color:'#FF0A0A',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$22.15</Text>
                </View>

                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$22.12</Text>
                  <Text style={{color:'#05FF00',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$22.34</Text>
                </View>
                </View>
              

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',width:'30%'}}>
                  <View style={{backgroundColor:'#E5E4E2',height:16,width:16,borderRadius:16}}></View>
                  <Text style={{marginLeft:15,fontFamily:'Montserrat-SemiBold',fontSize:14,color:'#000000'}}>Platinum</Text>
                </View>
                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$865.04</Text>
                  <Text style={{color:'#FF0A0A',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$865.01</Text>
                </View>

                <View style={{alignItems:'center',width:'30%'}}>
                  <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>$865.35</Text>
                  <Text style={{color:'#05FF00',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:4}}>$865.40</Text>
                </View>
                </View>
              
              
            </View>
        </View>
    )
}
export default Market;
