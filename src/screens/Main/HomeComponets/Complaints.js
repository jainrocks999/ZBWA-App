import react, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import Plus from "../../../assets/Icon/Plus.svg";
import Modal from "react-native-modal";
import CircleCross from "../../../assets/Icon/CircleCross.svg";


const Complaints = () => {
    const navigation = useNavigation()
    const [isVisible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Header
                title={'Complaints'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.main}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.add}>Add and view the status of your complaints</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setVisible(true)}
                                style={[styles.elevation, { borderLeftColor: item.status == 'Accepted' ? '#35CD56' : '#359FCD', }]}>
                                <View style={styles.view}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <View style={styles.view1}>
                                    <Text style={styles.complainNumber}>{'Complain Number : '}</Text>
                                    <Text style={styles.text}>{item.complainNumber}</Text>
                                </View>
                                <Text style={styles.name}>{item.name}</Text>
                                <TouchableOpacity style={[styles.touch, { backgroundColor: item.status == 'Accepted' ? '#35CD56' : '#359FCD', }]}>
                                    <Text style={styles.status}>{item.status}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <Modal isVisible={isVisible}>
                <View style={styles.modal}>
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={{ alignSelf: 'flex-end', margin: 5 }}>
                        <CircleCross />
                    </TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.cheat}>Cheating</Text>
                        <Text style={styles.date1}>16 Oct, 2023</Text>
                        <View style={styles.row}>
                            <Text style={styles.same}>{'Opposite Party Name : '}</Text>
                            <Text style={styles.name1}>Ashish Haval</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.same}>{'Opposite Party Firm Name : '}</Text>
                            <Text style={styles.name1}>Narayan Manohar Haval</Text>
                        </View>
                        <View style={{ marginTop: 6 }}>
                            <Text style={styles.same}>{'Details : '}</Text>
                            <Text style={styles.name1}>{'To,\nZBW Association \nMumbai \n27th March 2023'}</Text>
                        </View>
                        <Text style={styles.same}></Text>
                        <Text style={[styles.name1, { marginTop: 6 }]}>I need legal assistance in filling complaint agains Mr. Ashish Haval Proprietor in Narayal Manohar Haval, Kolhapur, for non payment.</Text>

                    </View>
                </View>
            </Modal>

            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddComplaints')}
                    style={styles.plus}>
                    <Plus />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Complaints;
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FFFFFF' 
    },
    main: { 
        paddingHorizontal: 25, 
        paddingTop: 14 
    },
    add: { 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 14, 
        color: '#000000' 
    },
    elevation: {
        width: '100%',
        borderWidth: 1,
        borderTopColor: '#FCDA64',
        borderRightColor: '#FCDA64',
        borderBottomColor: '#FCDA64',
        marginBottom: 20,
        borderRadius: 10,
        borderLeftWidth: 5,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 7
    },
    view: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    title: { 
        color: '#000000', 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 14 
    },
    date: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 10 
    },
    view1: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 6 
    },
    complainNumber: { 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 12, 
        color: '#000000' 
    },
    text: { 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 14, 
        color: '#000000' 
    },
    name: { 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 12, 
        color: '#000000', 
        marginTop: 6 
    },
    touch: {
        alignItems: 'center', 
        justifyContent: 'center', 
        alignSelf: 'flex-start',
        paddingVertical: 2, 
        paddingHorizontal: 10, 
        marginTop: 8, 
        borderRadius: 4
    },
    status: { 
        color: '#FFFFFF', 
        fontSize: 8, 
        fontFamily: 'Montserrat-Medium',
        marginBottom: 2 
    },
    modal: { 
        backgroundColor: '#FDEDB1', 
        borderRadius: 16, 
        paddingBottom: 20 
    },
    cheat: { 
        color: '#000000', 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 14 
    },
    date1: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 10, 
        marginTop: 6 
    },
    row: { 
        marginTop: 6, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    same: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 12 
    },
    name1: { 
        color: '#000000', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 12, 
    },
    bottom: { 
        position: 'absolute', 
        bottom: 30, 
        right: 20 
    },
    plus: { 
        height: 48, 
        width: 48, 
        borderRadius: 24, 
        backgroundColor: '#FCDA64', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})
const data = [
    { title: 'Cheating', complainNumber: '75', name: 'Ashish Haval', status: 'Accepted', date: '16 Oct, 2023' },
    { title: 'Theft', complainNumber: '77', name: 'Ashish Haval', status: 'In Progress (please visit office)', date: '16 Oct, 2023' },

]