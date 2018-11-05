import React from 'react';
import {Stylesheet, View, Text, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    onCreateAccountPress = () => {
        if(this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            });
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
            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                />    
            <Text>Password Confirm</Text>
            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                />      

            <Button title="Create account" onPress={this.onCreateAccountPress} />    
            </View>
        );
    }
}
