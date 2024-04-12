/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from "@react-native-firebase/messaging";

messaging().onMessage( (remoteMessage) => {
    console.log('this is remote notification', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => App);
