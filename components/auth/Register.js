import React, { Component } from 'react'
import { View, Button , TextInput, StyleSheet } from 'react-native' 
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import SocialButton from '../design/SocialButton'
import FormButton from '../design/FormButton';
import FormInput from '../design/FormInput';

export class Register extends Component {
    constructor(props) {
        super(props);

            this.state = {
              email: '',
              password: '',
              name: '',
              firstname: '',
              num: '',
              address: '',
            }

            this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const navigation = this.props.navigation
        const { email, password, name, firstname, address, num}= this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                firstname,
                name,
                num,
                email,
                address,
                password
            }) 
            console.log("eeeeeeHEEEREEE")
            console.log(result)
           
        })
        .catch((error)=> {
            console.log(error)
        })

        
      
    }

    render() {
        return (
            <View>
                        <FormInput
                            placeholderText="Nom"
                            iconType="user"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(name)=> this.setState({ name })}
                        />
                        <FormInput
                            placeholderText="Prénom"
                            iconType="user"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(firstname)=> this.setState({ firstname })}
                        />

                        <FormInput
                            placeholderText="Numéro de téléphone"
                            iconType="phone"
                            keyboardTypeType="number-pad"
                            autoCorrect={false}
                            onChangeText={(num)=> this.setState({ num })}
                        />
                        <FormInput
                            placeholderText="Adresse"
                            iconType="home"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(address)=> this.setState({ address })}
                        />
                        <FormInput
                            placeholderText="Adresse e-mail"
                            iconType="mail"
                            autoCapitalize="none"
                            keyboardTypeType="email-address"
                            autoCorrect={false}
                            onChangeText={(email)=> this.setState({ email })}
                        />
                        <FormInput
                            placeholderText="Mot de passe"
                            iconType="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            onChangeText={(password)=> this.setState({ password })}
                        />

                              <FormButton 
                               buttonTitle="S'enregistrer"                       
                               onPress={() => {this.onSignUp()}}
                             />
                
                        <SocialButton 
                                buttonTitle="S'inscrire avec Google"
                                btnType="google"
                                color="#de4d41"
                                backgroundColor="#f5e7ea"
                                onPress={() => {}}
                            />
                        <SocialButton 
                                buttonTitle="S'inscrire avec Facebook"
                                btnType="facebook"
                                color="#4867aa"
                                backgroundColor="#e6eaf4"
                                onPress={() => {}}
                            />
                            
            </View>
                
            
        )
    }
}

export default Register
