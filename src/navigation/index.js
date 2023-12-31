import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from "../screens/Auth/SplashPage";
import Login from "../screens/Auth/LoginPage";
import Register from "../screens/Auth/RegisterPage";
import Pin from "../screens/Auth/Mpin";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import HomeScreen from "../screens/Main/HomeScreen";
import Drawer from "../components/Drawer";
import ZBWNews from "../screens/Main/HomeComponets/ZBWNews";
import Events from "../screens/Main/HomeComponets/Events";
import ZBWGroup from "../screens/Main/ZBWGroup";
import BecomeAMember from "../screens/Main/HomeComponets/BecomeAMember";
import SecondaryMember from "../screens/Main/HomeComponets/SecondaryMember";
import AddSecondaryMember from "../screens/Main/HomeComponets/AddSecondaryMember";
import LegalSupport from "../screens/Main/HomeComponets/LegalSupport";
import OrderCopies from "../screens/Main/HomeComponets/OrderCopies";
import Complaints from "../screens/Main/HomeComponets/Complaints";
import Market from "../screens/Main/HomeComponets/Market";
import OurPartner from "../screens/Main/HomeComponets/OurPartner";
import AddComplaints from "../screens/Main/HomeComponets/AddComplaints";
import CreatePassword from "../screens/Auth/CreatePassword";
import Otp from "../screens/Auth/Otp";
import About from "../screens/Main/HomeComponets/About";
import Contact from "../screens/Main/HomeComponets/Contact";
import TermService from "../screens/Main/HomeComponets/TermService";
import ChangePassword from "../screens/Auth/ChangePassword";
import SetPin from "../screens/Auth/SetPin";
import ViewPdf from "../screens/Main/HomeComponets/ViewPdf";


const Stack = createNativeStackNavigator();
function Navigate() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterPage" component={Register} />
        <Stack.Screen name="Pin" component={Pin}/>
        <Stack.Screen name="Forgot" component={ForgotPassword}/>
        <Stack.Screen name='CreatePassword' component={CreatePassword}/>
        <Stack.Screen name='Otp' component={Otp}/>
        <Stack.Screen name='ChangePassword' component={ChangePassword}/>
        <Stack.Screen name="SetPin" component={SetPin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack1 = createNativeStackNavigator();

function Home(){
  return(
      <Stack1.Navigator         
        initialRouteName="DashBoard"
        screenOptions={{headerShown: false}}>
         <Stack1.Screen name='DashBoard' component={MyDrawer}/>
         <Stack1.Screen name='ZBWNews' component={ZBWNews}/>
         <Stack1.Screen name='Events' component={Events}/>
         <Stack1.Screen name="ZBWGroup" component={ZBWGroup}/>
         <Stack1.Screen name="BecomeAMember" component={BecomeAMember}/>
         <Stack1.Screen name='SecondaryMember' component={SecondaryMember}/>
         <Stack1.Screen name='AddSecondaryMember' component={AddSecondaryMember}/>
         <Stack1.Screen name='LegalSupport' component={LegalSupport}/>
         <Stack1.Screen name='OrderCopies' component={OrderCopies}/>
         <Stack1.Screen name='Market' component={Market}/>
         <Stack1.Screen name='Complaints' component={Complaints}/>
         <Stack1.Screen name='OurPartner' component={OurPartner}/>
         <Stack1.Screen name='AddComplaints' component={AddComplaints}/>
         <Stack1.Screen name='About' component={About}/>
         <Stack1.Screen name='Contact' component={Contact}/>
         <Stack1.Screen name='Terms' component={TermService}/>
         <Stack1.Screen name="ViewPdf" component={ViewPdf}/>
      </Stack1.Navigator>
  )
}

const DrawerStack = createDrawerNavigator();
function MyDrawer() {
  return (
    <DrawerStack.Navigator
    screenOptions={{headerShown:false}}
    drawerContent={() => <Drawer/>}>
        <DrawerStack.Screen name="Home" component={HomeScreen} />
    </DrawerStack.Navigator>
  );
}



export default Navigate;
