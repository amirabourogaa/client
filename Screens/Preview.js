
import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, ImageBackground   } from 'react-native'
import Slider from '@react-native-community/slider';
import {  Input, Item} from 'native-base';
import {TouchableRipple} from 'react-native-paper';
import bgOrange from '../images/bgOrange.jpg';


export default function Preview({ navigation }) {
    return (
      
        <SafeAreaView style = {styles.container}>
             <Text style = {styles.quest}>
                 Quel est le nombre d'exercices que vous avez fait comparé au nombre des exercices demandés 
            </Text>
           
            
           <Item style= {{marginBottom:20, marginTop:20, backgroundColor : '#ffd4b1'}} rounded>
              <Input placeholder=''/>
          </Item>

            <Text style = {styles.quest}>
                Quel est l'intensité de votre douleur ? 
            </Text>
            
           <Slider
                style={{width:'100%', height: 100}}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#191970"
                maximumTrackTintColor="black"
            /> 
           <Text style = {styles.quest} >
               Quel est votre niveau de gene au quotidien ? 
            </Text>
            
           <Slider
               style={{width:'100%', height: 100}}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#191970"
                maximumTrackTintColor="black"
            /> 
           <Text style = {styles.quest}>
               Vous sentez-vous limités dans vos mouvements ? 
            </Text>
            
           <Slider
                style={{width:'100%', height: 100}}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#191970"
                maximumTrackTintColor="black"
            />
            
            <TouchableRipple onPress={ ()=> alert ('Votre Bilan a bien été envoyé ') }>
                <View style={{ borderRadius : 80, alignItems : 'center', justifyContent :'center',height: 40,  backgroundColor: '#ffd4b1',}}>
                   
                    <Text style={{fontSize: 20,color: '#191970' }}>Envoyer</Text>
                </View>
            </TouchableRipple>

        </SafeAreaView >
      
    )
}

const styles = StyleSheet.create({
  
    container: {
      marginTop: 20,
      marginLeft:20,
      marginRight:20
    },
    quest : {
        fontSize: 18,
        fontWeight: 'bold'
    }
  
})