import React, { Component } from 'react'
import { View, Button , TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native' 
import firebase from 'firebase/app';
import 'firebase/auth'
import SocialButton from '../design/SocialButton';
import FormButton from '../design/FormButton';
import FormInput from '../design/FormInput';

export class Login extends Component {
    constructor(props) {
        super(props);

            this.state = {
              email: '',
              password: ''
              
            }

            this.onSignIn = this.onSignIn.bind(this)
    }
    onSignIn() {
        const { email, password }= this.state;
        const navigation = this.props.navigation
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log("i'm heeere")
            console.log(result)
           
          
        })
        .catch((error)=> {
            console.log(error)
        })
        
        
    }

    render() {
        return (
    
    <View style={styles.container}>
        <View>
            <Image
                source={require('../images/login.gif')}
                style={styles.logo}
                
                />
        
            <FormInput
                // labelValue={email}
                // onChangeText={(userEmail) => setEmail(userEmail)}
                onChangeText={(email) => this.setState({ email })}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
        
            <FormInput
                // labelValue={password}
                // onChangeText={(userPassword) => setPassword(userPassword)}
                onChangeText={(password) => this.setState({ password })}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
        
            <FormButton
                buttonTitle="Se connecter"
                onPress={() => {this.onSignIn()}}
            />
        
            {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
        
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                Don't have an acount? Create here
                </Text>
            </TouchableOpacity> */}
    </View>
            {/* <View>
                 <TextInput 
                placeholder="email" 
                onChangeText={(email) => this.setState({ email })}
                />
                 <TextInput 
                placeholder="password" 
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                />
                <Button
                onPress={() => this.onSignIn()}
                title="Sign In"
                />
            </View> */}

            <SocialButton 
        buttonTitle="Se connecter avec Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      
      <SocialButton 
        buttonTitle="Se connecter avec Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
   
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      paddingTop:0
    },
    logo: {
      height: 150,
      width: 230,
      borderRadius: 10,
      resizeMode: 'center',
      marginLeft: 55
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
  });