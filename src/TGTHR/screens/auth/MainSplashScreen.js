import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, Button, Alert, TouchableHighlight,} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header:null,
      };


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        
    }

    // click the login  button, go to login
    // onLoginPress = () => {
    //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(() => {

    //     }, (error) => {
    //         Alert.alert(error.message);
    //     });
    // }
 
    // click the 'sign up' button, go to sign up. EZPZ
    onCreateAccountPress = () => {
        this.props.navigation.navigate("Signup");
    }
    onLoginPress = () => {
        this.props.navigation.navigate("Login");
    }

    componentWillMount(){
        this.startHeaderHeight = 0;
      }

    render () {
        return (
            <View style={{flex:1}}>
                <View style={{flex: 1, backgroundColor: 'grey' }}>
                    <View style={{ position: 'absolute', top: 0,  left: 0, width: '100%', height: '100%',}}>
                        <Image style={{flex: 1, resizeMode:'cover', opacity:0.4, }}
                        // source={{ uri: "https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fresort.png?alt=media&token=8406db95-fec0-4ca8-928c-fbfe484eb3d3" }} />
                        source={{uri: "https://i.imgur.com/Y4yZiKR.gif"}} />
                    </View>
                <View style={{paddingTop:50, alignItems:"center", backgroundColor:'transparent'}}>
                
                    <Image style={styles.logoPic} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Ftgthr%20logo.png?alt=media&token=4ace64b6-cc24-4e79-8960-c9a296e0ee19"}} />

                    {/* <Text style={styles.betterText}>The better way to meet.</Text> */}
                    <TouchableHighlight style={styles.buttonContainer} onPress={this.onCreateAccountPress}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableHighlight>  
                    <TouchableHighlight style={styles.buttonContainer2} onPress={this.onLoginPress}>
                        <Text style={styles.signUpText}>Login</Text>
                    </TouchableHighlight>  
                </View>
            </View>
        </View>    


            
        );
    }
}

const styles = StyleSheet.create({
    betterText: {
        fontSize: 24,
        marginBottom:20,
    },
    logoPic: {
        width: 200,
        height: 200,
        marginBottom: 300,
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:280,
        borderRadius:30,
        backgroundColor: "#9E5EE8",
    },
    buttonContainer2: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:280,
        borderRadius:30,
        backgroundColor: "#333",
    },
    signUpText: {
        color: 'white',
    },
});