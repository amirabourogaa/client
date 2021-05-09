import React, { Component } from 'react';
import {  Button, ImageBackground, StyleSheet,  View , Text, Image } from 'react-native';

import bgOrange from '../../images/bgOrange.jpg';
import FlatButton from '../Buttons/button';
import LoginButton from '../Buttons/loginButton';

export default function Landing({ navigation }) {
    return (
        <ImageBackground blurRadius = {2} style = {styles.backgroundContainer} source = {bgOrange} >
                 <View style = {styles.welcomeView}>
               <Image
               style = {{width :350, height: 350}}
               source = {require ('../../images/healthy.png')}
               />

            </View>
            
            <FlatButton 
                text ="Creer Un Compte"
                onPress={()=> navigation.navigate("Register")} />
            <LoginButton 
                text="Se Connecter"
                onPress={()=> navigation.navigate("Login")} />


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
