import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB65HnG2F1CtTwPRAGNlCn8ukbMfMeTTWY",
  authDomain: "kine-dev.firebaseapp.com",
  projectId: "kine-dev",
  storageBucket: "kine-dev.appspot.com",
  messagingSenderId: "631795409662",
  appId: "1:631795409662:web:268a09f430af6a34e6fbaf",
  measurementId: "G-P9LY90HE59"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register';
import ProfileScreen from './Screens/Profile';
import LandingMira from './Screens/LandingMira';
import Videos from './Screens/Videos';
import Preview from './Screens/Preview';
import SignIn from './Screens/SignIn';
import EditProfile from './Screens/EditProfileScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: true , headerStyle : {backgroundColor : 'white'} ,headerTitle : 'Bienvenue', headerTitleStyle: {color : 'black'} }}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="LandingMira" component={LandingMira}/>
      <Stack.Screen name="Videos" component={Videos}/>
      <Stack.Screen name="Preview" component={Preview}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}
