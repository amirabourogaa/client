import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';
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

  firebase.initializeApp(firebaseConfig)


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import Timer from './components/Timer/Timer'
import Profile from './Screens/Profile'
import EditProfile from './Screens/EditProfileScreen'
import ExercicesScreen from './Screens/Exercices'
import Video from './Screens/Video'
import PreviewScreen from './Screens/Preview'



const Stack = createStackNavigator();
const Stacklog = createStackNavigator();

export function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if(user != null){
      
    }
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  

  

    
    
    if(initializing){

      return(
        <View style={{ flex: 1, justifyContent:'center'}}>
              <Text>Loading</Text>
        </View>
      )
    }
    if (!user) {
      return (
        <NavigationContainer>
         <Stack.Navigator initialRouteName="Landing">
           <Stack.Screen name="Bienvenue" component={LandingScreen} options={{ headerShown: true  }}/>
           <Stack.Screen name="Register" component={RegisterScreen} options = {{title : 'Créer Un compte'}} />
           <Stack.Screen name="Login" component={LoginScreen}  options = {{title : 'Se Connecter'}} />
          
           </Stack.Navigator>
       </NavigationContainer>
        
       );
    }else{

      return(
          <NavigationContainer>
            <Stacklog.Navigator initialRouteName="Profile">
            <Stacklog.Screen name="Profile" component={Profile} options={{ headerShown: true }}/>
            <Stacklog.Screen name="EditProfile" component={EditProfile} options={{ headerShown: true , title : 'Modifier Votre Profil'}}/>
            <Stacklog.Screen name="Exercices" component={ExercicesScreen} options={{ headerShown: true , title : 'Mes Exercices'}}/>
            <Stacklog.Screen name="Preview" component={PreviewScreen} options={{ headerShown: true , title : 'Envoyer Mon Rapport'}}/>
            <Stacklog.Screen name="Video" component={Video} options={{ headerShown: true , title : 'Vidéo'}}/>
            <Stacklog.Screen name="Timer" component={Timer} options={{ headerShown: true , title : 'Minuteur'}}/>

            </Stacklog.Navigator>
          </NavigationContainer>
          

    //                 <View style={{ flex: 1, justifyContent:'center'}}>
    // <Text>User is loggedInn herreee♥♥ {user.email}</Text>
    //           <Button 
    //           title="Log Out"
    //           onPress={() => {logout()}}/> 
    //     </View>
      )
    }
    
}


export default App