import react,{useState} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";


const Complaints = () => {
    const navigation = useNavigation()
     const [isVisible,setVisible]=useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header
                title={'Complaints'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ paddingHorizontal: 25, paddingTop: 14 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14, color: '#000000' }}>Add and view the status of your complaints</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                            onPress={()=>setVisible(true)}
                             style={{
                                width: '100%',
                                borderWidth: 1,
                                borderTopColor: '#FCDA64',
                                borderRightColor: '#FCDA64',
                                borderBottomColor: '#FCDA64',
                                marginBottom: 20,
                                borderRadius: 10,
                                borderLeftWidth: 5,
                                borderLeftColor: item.status == 'Accepted' ? '#35CD56' : '#359FCD',
                                shadowColor: '#000',
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 0, height: 2 },
                                shadowRadius: 20,
                                elevation: 5,
                                backgroundColor: '#FFFFFF',
                                paddingHorizontal: 10,
                                paddingVertical: 7
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ color: '#000000', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}>{item.title}</Text>
                                    <Text style={{ color: '#000000', fontFamily: 'Montserrat-Regular', fontSize: 10 }}>{item.date}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#000000' }}>{'Complain Number : '}</Text>
                                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: '#000000' }}>{item.complainNumber}</Text>
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#000000', marginTop: 6 }}>{item.name}</Text>
                                <TouchableOpacity style={{
                                    alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start',
                                    backgroundColor: item.status == 'Accepted' ? '#35CD56' : '#359FCD',
                                    paddingVertical: 2, paddingHorizontal: 10, marginTop: 8, borderRadius: 4
                                }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 8, fontFamily: 'Montserrat-Medium', marginBottom: 2 }}>{item.status}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <Modal isVisible={isVisible}>
                <View style={{ backgroundColor:'#FDEDB1',height:290,borderRadius:16 }}>
                    <TouchableOpacity 
                    onPress={()=>setVisible(false)}
                     style={{alignSelf:'flex-end',margin:5}}>
                        <CircleCross/>
                    </TouchableOpacity>
                    <View style={{padding:15}}>
                        <Text style={{color:'#000000',fontFamily:'Montserrat-SemiBold',fontSize:14}}>Cheating</Text>
                        <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:10,marginTop:6}}>16 Oct, 2023</Text>
                        <View style={{marginTop:6,flexDirection:'row',alignItems:'center'}}>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>{'Opposite Party Name : '}</Text>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12,}}>Ashish Haval</Text>
                        </View>
                        <View style={{marginTop:6,flexDirection:'row',alignItems:'center'}}>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>{'Opposite Party Firm Name : '}</Text>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12,}}>Narayan Manohar Haval</Text>
                        </View>
                        <View style={{marginTop:6}}>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>{'Details : '}</Text>
                           <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12,}}>{'To,\nZBW Association \nMumbai \n27th March 2023'}</Text>
                        </View>
                        <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12,marginTop:0}}></Text>
                        <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12,marginTop:6}}>I need legal assistance in filling complaint agains Mr. Ashish Haval Proprietor in Narayal Manohar Haval, Kolhapur, for non payment.</Text>

                    </View>
                </View>
            </Modal>

            <View style={{ position: 'absolute', bottom: 30, right: 20 }}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('AddComplaints')}
                    style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: '#FCDA64', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Complaints;
const data = [
    { title: 'Cheating', complainNumber: '75', name: 'Ashish Haval', status: 'Accepted', date: '16 Oct, 2023' },
    { title: 'Theft', complainNumber: '77', name: 'Ashish Haval', status: 'In Progress (please visit office)', date: '16 Oct, 2023' },

]