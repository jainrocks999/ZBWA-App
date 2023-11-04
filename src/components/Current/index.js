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
                                <Text style={styles.live}>Live</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.view2}>
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
        marginTop: 10,
        backgroundColor: '#FFFFFF'
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
        width: 40,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCDA64',
        borderRadius: 10
    },
    live: {
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: -2
    },
    view2: {
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
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet' },
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet' },
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet' },
    { img: require('../../assets/LocalImage/image.png'), title: 'All India Jewellers Meeet' }
]

