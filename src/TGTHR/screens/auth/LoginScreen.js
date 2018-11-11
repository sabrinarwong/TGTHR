import React from 'react';
import {Stylesheet, View, Text, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    // click the login  button, go to login
    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {

        }, (error) => {
            Alert.alert(error.message);
        });
    }

    // click the 'sign up' button, go to sign up. EZPZ
    onCreateAccountPress = () => {
        this.props.navigation.navigate("Signup");
    }
    onForgotPasswordPress = () => {
        this.props.navigation.navigate("ForgotPassword");
    }

    render () {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>
            <Text>email</Text>
            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email: text}) } }
                />
            <Text>Password</Text>
            <TextInput secureTextEntry={true} style={{width:200, height:40, borderWidth:1}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                />    

            <Button title="Login" onPress={this.onLoginPress} />
            <Button title="Sign up" onPress={this.onCreateAccountPress} />    
            <Button title="Forgot Password" onPress={this.onForgotPasswordPress} />
            </View>
        );
    }
}
