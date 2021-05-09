import React from 'react'
import { Text, Image, StyleSheet,View } from 'react-native';
import {TouchableRipple} from 'react-native-paper'
import { Container,  DeckSwiper, Card, CardItem, Thumbnail, Left, Body,  Button } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const cards = [
  {
   
    name: 'Mouvement 1',
    image: require('../images/exercice1.jpg'),
  },
  {
    
    name: 'Mouvement 2',
    image: require('../images/exercice2.jpg'),
  },
  {
   
    name: 'Mouvement 3',
    image: require('../images/exercice3.jpg'),
  },
  
];
export default function Exercices({ navigation }) {
    return (
       
           
        <Container>
         
        <Container>
      
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                  
                      <Text style = {{fontSize: 20, fontWeight : 'bold', color : '#191970'}}>Suivez les mouvements suivants  </Text>
                      <Text note> <Button rounded  warning >
            <Icon name='alarm' />
            <Text >10 min</Text>
          </Button></Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
       
      </Container>
      <Image
               style = {{width :100, height: 100, marginLeft : 200}}
               source = {require ('../images/swipe.gif')}
               />
      <TouchableRipple onPress={() => {navigation.navigate('Timer')}}>
          <View style={styles.menuItem}>
            <Icon name="eye-plus-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Voir La Vidéo</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate('Preview')}}>
          <View style={styles.menuItem}>
            <Icon name="newspaper-variant-multiple-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Mon Rapport </Text>
          </View>
        </TouchableRipple>
        
       
      

   </Container>
     
    )
}

const styles = StyleSheet.create({
  
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
})