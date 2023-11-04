import react, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";
import Partner from "../../../assets/LocalImage/Partner.svg";


const OurPartner = () => {
    const navigation = useNavigation()
    const [isVisible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Header
                title={'Our Partners'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setVisible(true)}
                            style={styles.view}>
                            <View style={styles.view1}>
                                <View>
                                    {item.complainNumber}
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={styles.title}>{item.title}</Text>
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