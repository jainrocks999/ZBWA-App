import react, { useState ,useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import Partner from "../../../assets/LocalImage/Partner.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";
import Loader from "../../../components/Loader";
import Toast from "react-native-simple-toast";
import axios from "axios";


const OurPartner = () => {
    const navigation = useNavigation()
    const [isVisible, setVisible] = useState(false)
    const [loader,setLoader]=useState(false)
    const [partner,setPartner]=useState()

    useEffect(()=>{
        handleApi()
    },[])

    const handleApi=async()=>{
        const user_token=await AsyncStorage.getItem(Storage.user_token)
        console.log('this is user token',user_token);
        setLoader(true)
        axios({
            method: 'get',
            url: 'http://45.79.123.102:49002/api/partner/all/1',
            headers: `Authorization: ${user_token}`
          })
          .then(function(response) {
            if(response.data.code=='200'){
                console.log('this is response',response.data.data);
                setPartner(response.data.data)
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

    return (
        <View style={styles.container}>
            {loader?<Loader/>:null}
            <Header
                title={'Our Partners'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <FlatList
                    data={partner}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setVisible(true)}
                            style={styles.view}>
                            <View style={styles.view1}>
                                <View>
                                    {/* {item.complainNumber} */}
                                    <Image 
                                    // resizeMode="stretch" 
                                    style={{width:120,height:40}}
                                     source={{uri:item.logo}}/>
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.number}>{item.number}</Text>
                                    <Text style={styles.email}>{item.email}</Text>
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
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FFFFFF' 
    },
    main: { 
        paddingHorizontal: 25, 
        paddingTop: 24 
    },
    view: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#FCDA64',
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
    },
    view1: { 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    title: { 
        fontSize: 14, 
        fontFamily: 'Montserrat-SemiBold', 
        color: '#000000' 
    },
    number: { 
        color: '#000000', 
        fontSize: 12, 
        fontFamily: 'Montserrat-Regular', 
        marginTop: 6 
    },
    email: { 
        color: '#000000', 
        fontSize: 12, 
        fontFamily: 'Montserrat-Regular', 
        marginTop: 6 
    }
})
const data = [
    { title: 'Ambr Xpress\nLogistic', complainNumber: <Partner />, email: 'info@axlpl.com', number: '9136140340', },

]