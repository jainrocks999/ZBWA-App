import react,{useState} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import Partner from "../../../assets/LocalImage/Partner.svg";


const OurPartner = () => {
    const navigation = useNavigation()
     const [isVisible,setVisible]=useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header
                title={'Our Partners'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ paddingHorizontal: 25, paddingTop: 24 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                            onPress={()=>setVisible(true)}
                             style={{
                                width: '100%',
                                borderWidth: 1,
                                borderColor:'#FCDA64',
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
                                
                            }}>
                              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                <View>
                                {item.complainNumber}
                                </View>
                                <View style={{marginLeft:15}}>
                                    <Text style={{fontSize:14,fontFamily:'Montserrat-SemiBold',color:'#000000'}}>{item.title}</Text>
                                    <Text style={{color:'#000000',fontSize:12,fontFamily:'Montserrat-Regular',marginTop:6}}>{item.number}</Text>
                                    <Text style={{color:'#000000',fontSize:12,fontFamily:'Montserrat-Regular',marginTop:6}}>{item.email}</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>            
        </View>
    )
}
export default OurPartner;
const data = [
    { title: 'Ambr Xpress\nLogistic', complainNumber: <Partner/>, email: 'info@axlpl.com', number: '9136140340', },

]