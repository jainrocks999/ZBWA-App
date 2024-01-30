import React,{useState,useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import BlackEye from "../../../assets/Icon/BlackEye.svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";
import Toast from "react-native-simple-toast";
import Loader from "../../../components/Loader";

const OrderCopies = () => {
    const navigation = useNavigation()
    const [loader,setLoader]=useState(false)
    const [data,setData]=useState()

    useEffect(()=>{
        apiCall()
  },[])

  const apiCall=async()=>{
  
      const user_token=await AsyncStorage.getItem(Storage.user_token)

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
              Toast.show(response.data.message)
              setData(response.data.data)
              setLoader(false)
          }
          else{
              setLoader(false)
              Toast.show(response.data.message)
          }
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          setLoader(false)
          console.log(error);
        });
        
  }


    return (
        <View style={styles.container}>
            {loader?<Loader/>:null}
            <Header
                title={'Order Copies'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.view}>
                            <Text>{item.name}</Text>
                            <TouchableOpacity activeOpacity={0.5}>
                                <BlackEye />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
export default OrderCopies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    main: {
        paddingHorizontal: 25,
        marginTop: 30
    },
    view: {
        width: '100%',
        backgroundColor: '#FCDA6480',
        borderRadius: 20,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        paddingVertical: 15,
        shadowColor: '#FCDA6480',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        elevation: 5,
    }
})

const data = [
    { title: 'ADG OF RAILWAY POLICE' },
    { title: 'SENIOR PI LT MARG POLICE STATION' }
]