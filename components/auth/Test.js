import React from 'react'
import { View, Text, Button } from 'react-native'
import App from '../../App'
import firebase from 'firebase'

function Test (){
    const logout = () => {
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      }
        return (
            <View>
                <Text>Hello Worrldd ♥♥♥</Text>
                <Button title="deconnect" 
                onPress={() => {logout()}}
                />
            </View>
        )
    
}

export default Test
