import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import {Container ,Button, Icon} from 'native-base'

export default function Videos({ navigation }) {
    return (
       
           
        <Container>
             <Button iconLeft light>
            <Icon name='trush' />
            <Text>Back</Text>
          </Button>
        <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
        /> 

   </Container>
     
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
