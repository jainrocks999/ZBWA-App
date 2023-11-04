import React from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const LegalSupport = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header
                title={'Legal Support'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <View style={styles.view}>
                                <View style={styles.view1}>
                                    <View style={{ marginTop: -36 }}>
                                        <Image source={item.img} />
                                    </View>
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}
export default LegalSupport;
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FFFFFF' 
    },
    main: { 
        alignItems: 'center', 
        marginTop: 25 
    },
    item: { 
        width: '40%', 
        height: 135, 
        marginHorizontal: 20, 
        marginVertical: 15 
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 5, left: 0, right: 0
    },
    view1: {
        height: 60,
        width: 100,
        backgroundColor: '#FCDA64',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center'
    },
    title: { 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 14, 
        color: '#000000', 
        marginTop: 8, 
        textAlign: 'center' 
    }
})
const data = [
    { title: 'Adv. Rajesh \nThakkar', img: require('../../../assets/LocalImage/Ellipse9.png') },
    { title: 'Adv. Sunny \nJain', img: require('../../../assets/LocalImage/Ellipse10.png') },
    { title: 'Adv. Rajesh \nThakkar', img: require('../../../assets/LocalImage/Ellipse11.png') },
    { title: 'Adv. Sunny \nJain', img: require('../../../assets/LocalImage/Ellipse9.png') },
    { title: 'Adv. Rajesh \nThakkar', img: require('../../../assets/LocalImage/Ellipse10.png') },
    { title: 'Adv. Sunny \nJain', img: require('../../../assets/LocalImage/Ellipse11.png') },

]