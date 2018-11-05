import React from 'react';
import {Stylesheet, View, Text, TextInput, Button} from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSendEmailPress = () => {
        
    }

    render () {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>
            <Text>email</Text>
            <TextInput style={{width:200, height:40, borderWidth:1}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email: text}) } }
                />
            <Button title="Send email" onPress={this.onSendEmailPress} />
            </View>
        );
    }
}
