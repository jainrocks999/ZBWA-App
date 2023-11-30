import React,{useEffect,useState,useCallback} from "react";
import { View,Text,TouchableOpacity, TextInput } from "react-native";
import HeaderArrow from "../../../assets/Icon/HeaderArrow.svg";
import ChatLogo from "../../../assets/Icon/ChatLogo.svg";
import { useNavigation } from "@react-navigation/native";
import Attach from "../../../assets/Icon/Attach.svg";
import Send from "../../../assets/Icon/Send.svg";
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../../../components/LocalStorage";

const ZBWGroup=()=>{
    const navigation=useNavigation()
    const [messages, setMessages] = useState([]);
    const [messageId,setMessageId]=useState()
    const [isTyping,setTyping]=useState(false)
    const [userId,setUserId]=useState()

   const getCurrentMessages = async() => {
      const user_id=await AsyncStorage.getItem(Storage.user_id)
       setUserId(user_id)
      await firestore().collection("chat")
      .orderBy("createdAt", "desc")
      .limit(50)
      .onSnapshot(querySnapshot => {
          const messages = []
          querySnapshot.forEach((res) => {
              const { 
                  _id,
                  user,
                  text,
                  createdAt,
                  } = res.data();
  
                  messages.push({
                      key: res._id,
                      _id,
                      user,
                      text,
                      createdAt,
                  });
          })
         setMessages(messages)
      })
  }
    useEffect(() => {
      getCurrentMessages()
    },[]);

   const onSend = async(message) => {
   console.log(message
    );
      const user_id=await AsyncStorage.getItem(Storage.user_id)
      const username=await AsyncStorage.getItem(Storage.username)

      await firestore().collection("chat")
      .doc()
      .set({
          _id:message[0]._id,
          text: message[0].text,
          createdAt:Date.parse(message[0].createdAt),
          user: {
            _id: user_id,
            name: username,
        },
      }, { merge: true })

  }
   
  

    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <View style={{height:45,backgroundColor:'#000000',width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.5} 
            onPress={()=>navigation.goBack()}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}>
              <HeaderArrow/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <ChatLogo/>
            <Text style={{fontSize:16,color:'#FCDA64',fontFamily:'Montserrat-Bold',marginLeft:15}}>{'ZBW GROUP'}</Text>
            </View>
            <TouchableOpacity
            activeOpacity={0.5}
            style={{width:60,height:45,alignItems:'center',justifyContent:'center'}}

            >
            </TouchableOpacity>
        </View>
        <GiftedChat
                    showUserAvatar={true}
                    // isTyping={isTyping}
                    renderUsernameOnMessage={true}
                    messages={messages}
                    onSend={message => onSend(message)}
                    scrollToBottom
                    user={{
                      _id: userId,
                    }}
                    // inverted={true}
                    // locale = { dayjs.locale('en-ca') }
                    // showAvatarForEveryMessage = {true}
                    dateFormat = 'll'
                    timeFormat = 'LT'
                    // onPressAvatar={user => this.getProfile(user)}
                />
        {/* <View style={{
            height:50,width:'100%',borderWidth:1,borderColor:'#D9D9D9',
            position:'absolute',bottom:0,left:0,right:0,
            flexDirection:'row',alignItems:'center',justifyContent:'space-between',
            paddingHorizontal:15
        }}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Attach/>
            <TextInput
             placeholder="Type a message..."
             style={{marginLeft:20,fontSize:13,color:'#B3B3B3',fontFamily:'Montserrat-Medium'}}
            />
          </View>
          <View>
            <Send/>
          </View>
        </View> */}
        </View>
    )
}
export default ZBWGroup;