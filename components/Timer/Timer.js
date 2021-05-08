import React, {useEffect, useState} from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';


export default function Timer() {

    const [secondsLeft, setSecondsLeft] = useState(3601);
    const [timerOn, setTimerOn] = useState(false)
    // useEffect(() => {
    //     if(timerOn) startTimer()
    //     else BackgroundTimer.stopBackgroundTimer()
    //     return () => {
    //         BackgroundTimer.stopBackgroundTimer()
    //     }
    // }, [timerOn])

    const clockify = ( )=>{
      let hours = Math.floor(secondsLeft/60/60)
      let mins = Math.floor ((secondsLeft / 60)% 60)
      let seconds = Math.floor(secondsLeft%60)
      let displayHours = hours < 10 ? `0${hours}`: hours;
      let displayMins = mins < 10 ? `0${mins}`: mins;
      let displaySeconds = seconds < 10 ? `0${seconds}`: seconds;
      return {
        displayHours,
        displayMins,
        displaySeconds

      }
    }

    return (
      
            <View style = {styles.container}>
               <Text style = {styles.time}>{clockify().displayHours} Hours {clockify().displayMins} Minutes {clockify().displaySeconds} Seconds </Text>
               <Button title = 'START/STOP' onPress = {()=>{setTimerOn((current)=> !current)}}></Button>
            </View>
      
    )
}


const styles = StyleSheet.create({

   container: {
       backgroundColor : 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  secondText: {
    fontSize: 25,
  }
})