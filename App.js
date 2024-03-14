import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LogBox,
  Button,
  Platform,
  SafeAreaView,
  FlatList,
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigation';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from "./src/components/LocalStorage";
// import messaging from "@react-native-firebase/messaging";
import crashlytics from '@react-native-firebase/crashlytics';


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

PushNotification.createChannel(
  {
    channelId: "default-channel-id",
    channelName: "My channel",
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
);
const App = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
      AsyncStorage.setItem(Storage.fcm_token,token.token)
    },
      onNotification: function (notification) {
        PushNotification.localNotification({
          title: notification.message,
          message: notification.title,
        });
      console.log("NOTIFICATION:", notification);  
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
      onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: function(err) {
      console.error(err.message, err);
    },
      permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  // const getFCMToken = async () => {
  //   try {
  //     const token = await messaging().getToken();
  //     console.log(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   Platform.OS=='ios'?getFCMToken():null
  // }, []);

  useEffect(async() => {
    crashlytics().log('Analytics page just mounted')
    getCrashlyticsDetail()
    return () => {
      crashlytics().log('Analytics page just unmounted')
    }
  }, [])

  const getCrashlyticsDetail = async() => {
    const user_id=await AsyncStorage.getItem(Storage.user_id)
    const name=await AsyncStorage.getItem(Storage.username)
    try {
      crashlytics().setUserId(user_id)
      crashlytics().setAttribute('username', name)
    } catch (err) {
      crashlytics().recordError(err)
    }
  }

  return (
    <Fragment>
      {/* <SafeAreaView style={{backgroundColor:Platform.OS=='ios'?'#032e63':'#fff'}}/> */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Platform.OS == 'ios' ? '#000' : '#fff',
        }}>
        <Provider store={Store}>
          <RootApp />
        </Provider>
        {/* <StatusBar backgroundColor={'#000'}/> */}
        <StatusBar
        backgroundColor={ "#000" }
        barStyle={"light-content" }
      />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

