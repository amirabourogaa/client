import React from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av' 
import Timer from '../components/Timer/Timer'

export default function Vdo() {
    return (
        <View>
                    <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    useNativeControls
                    resizeMode="cover"
                    style={{ width: 300, height: 300 }}
                    /> 
                    
        </View>
    )
}
