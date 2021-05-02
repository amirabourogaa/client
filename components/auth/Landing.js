import React, { Component } from 'react';
import {  Button, ImageBackground, StyleSheet,  View , Text, Image
 } from 'react-native';

import bgImg from '../../images/animated1.gif';
import FlatButton from '../Buttons/button';
import LoginButton from '../Buttons/loginButton';



export default function Landing({ navigation }) {

    return (
        <ImageBackground blurRadius = {2} style = {styles.backgroundContainer} source = {bgImg} >
                 <View style = {styles.welcomeView}>
               <Image
               style = {{width : 150, height: 150}}
               source = {require ('../../images/logo.png')}
               />

            </View>
            

         
            <FlatButton 
                text ="Creer Un Compte"
                onPress={()=> navigation.navigate("Register")} />
            <LoginButton 
                text="Se Connecter"
                onPress={()=> navigation.navigate("Profile")} />
{/*            
                 <Button 
                title="Profile"
                onPress={()=> navigation.navigate("Profile")} />
                 <Button 
                title="Videos"
                onPress={()=> navigation.navigate("Videos")} />
                 <Button 
                title="Preview"
                onPress={()=> navigation.navigate("Preview")} /> */}

        </ImageBackground>
    )
}

var styles = StyleSheet.create({
    backgroundContainer: {
        flex : 1,
        width: null,
        height: null ,
        justifyContent: 'center',
        alignItems:'center',
        overlayColor: 'black'
    },
    welcomeView : {
        alignItems : 'center'
    }
  });
