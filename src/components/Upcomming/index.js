import React from "react";
import { View, Text, FlatList, Image, Dimensions, ImageBackground, StyleSheet } from "react-native";
const Current = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.main}>
                        <ImageBackground style={styles.background} source={item.img}>
                            <View style={styles.view}>
                                <Text numberOfLines={2} style={styles.date}>{item.date}</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.view1}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </View>

                )}
            />
        </View>
    )
}
export default Current;
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        marginTop: 10 
    },
    main: { 
        marginBottom: 20, 
        width: Dimensions.get('window').width - 50 
    },
    background: { 
        width: Dimensions.get('window').width - 50, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        height: 120, 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        paddingRight: 10, 
        paddingBottom: 10 
    },
    view: { 
        width: 38,
        height: 36, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#FCDA64', 
        borderRadius: 5, 
        paddingHorizontal: 5 
    },
    date: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 10, 
        marginTop: -2, 
        textAlign: 'center' 
    },
    view1: { 
        backgroundColor: '#FCDA64', 
        height: 40, 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10 
    },
    title: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 12 
    }
})


const data = [
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet', date: '19 Nov' },
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet', date: '20 Nov' },
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet', date: '21 Nov' }


]

