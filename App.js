import { StatusBar } from 'expo-status-bar'
import React , { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Provider } from 'react-redux'             
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import Profile from './Screens/Profile'
import EditProfile from './Screens/EditProfileScreen'
import VideosScreen from './Screens/Vdo'
import PreviewScreen from './Screens/Preview'
import { NavigationContainer } from '@react-navigation/native'

const store = createStore(rootReducer, applyMiddleware(thunk))

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

const Stack = createStackNavigator();
const Stacklog = createStackNavigator();

export function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    
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

    return(
      <Provider store={store}>    
          <StatusBar />
          <NavigationContainer>
            {
              !user ?
                <Stack.Navigator initialRouteName="Bienvenue">
                  <Stack.Screen name="Bienvenue" component={LandingScreen} options={{ headerShown: true  }}/>
                  <Stack.Screen name="Register" component={RegisterScreen} options = {{title : 'Créer Un compte'}} />
                  <Stack.Screen name="Login" component={LoginScreen}  options = {{title : 'Se Connecter'}} />
                </Stack.Navigator>
              :
              null
            }
            {
              user ?
              <Stacklog.Navigator initialRouteName="Profile">
                <Stacklog.Screen name="Profile" component={Profile} options={{ headerShown: true }}/>
                <Stacklog.Screen name="EditProfile" component={EditProfile} options={{ headerShown: true , title : 'Modifier Votre Profil'}}/>
                <Stacklog.Screen name="Videos" component={VideosScreen} options={{ headerShown: true , title : 'Mes Vidéos'}}/>
                <Stacklog.Screen name="Preview" component={PreviewScreen} options={{ headerShown: true , title : 'Envoyer Mon Rapport'}}/>
              </Stacklog.Navigator>
              :
              null
            }
          </NavigationContainer>
      </Provider>  
    )
}

export default App