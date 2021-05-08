import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function FlatButton({text, onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    button: {
        backgroundColor: '#e67300',
       height : 60,
        width : 250,
        padding: 16, 
        textAlign: 'center',
        fontSize: 16,
        margin: 4,
        opacity: 0.9,
        marginTop : 230,
        marginBottom : 20
     
    

    },
   buttonText : {
       color : 'white',
       fontWeight : 'bold',
       textTransform : 'uppercase',
       fontSize:16,
       textAlign : 'center'
   }
})