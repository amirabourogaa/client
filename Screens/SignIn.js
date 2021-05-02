import React, {Component} from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import bgImg from '../images/bgSignIn.jpg';
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';




function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  
export default  class SignIn  extends React.Component {

    constructor (){
        super()
            this.state= {
                isReady : false,

            }
    }
    
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
     
      require('../assets/bgSignIn.jpg'),
    ]);

    

    await Promise.all([...imageAssets]);
  }
    render (){

        if (!this.state.isReady) {
            return (
              <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
              />
            );
          }
       
        return (
            <ImageBackground blurRadius={5} style = {styles.backgroundContainer} source = {bgImg} >
                    <View>
                        
                    </View>
            </ImageBackground>
        )
        }
    
}

var styles = StyleSheet.create({
    backgroundContainer: {
        flex : 1,
        width: null,
        height: null ,
        justifyContent: 'center',
        alignItems:'center'
    }
  });