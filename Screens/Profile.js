import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import bgImg from '../images/bgSignIn.jpg';
import {
    Avatar,
    Title,
    Caption,
   
    TouchableRipple,
  } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




  
function Profile  ({navigation}) {

    

       
        return (
           
                
            <SafeAreaView style = {styles.container}>
                
                <View style = {styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}} >
                        <Avatar.Image
                        source = {{
                            uri: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/41788148_10217537269042605_1942714794331078656_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=T59qQCqGq1QAX81GqBZ&_nc_ht=scontent.ftun2-1.fna&oh=7be673bdba257537b49dc8e277dcd878&oe=60B42F92',
                            }}
                            size={80}
                        
                        />

                        <View style={{marginLeft: 20}}>
                            <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                            }]}>Houssem joo</Title>
                            <Caption style={styles.caption}>@H_Joo</Caption>
                        </View>
                    </View>
                </View>
            
                <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Bruxelle, Belgique</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>houssem.joo@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>4</Title>
            <Caption>Videos</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Exercices</Caption>
          </View>
      </View>

      <View tyle={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tes Favouris</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="video-3d-variant" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Mes Vidéos</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Envoyer</Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Les paramètres</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate('EditProfile')}}>
          <View style={styles.menuItem}>
            <Icon name="file-document-edit-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Modifier</Text>
          </View>
        </TouchableRipple>
      </View>
            
            </SafeAreaView>
               
    
           
        )
        
    
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
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