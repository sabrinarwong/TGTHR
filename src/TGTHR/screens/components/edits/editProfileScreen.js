import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Button,
	ScrollView,
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';

export default class editProfileScreen extends React.Component {

	constructor(){
	    super();
	    console.ignoredYellowBox = [
	      'Setting a timer'
	    ];  
	    this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
	    this.state = {
	      name: ''
	    }
	    this.database2 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/email'); 
	    this.state = {
	      email: ''
	    }
	    this.database3 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/password'); 
	    this.state = {
	      password: ''
	    }
	    this.database4 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/bio'); 
	    this.state = {
	      bio: ''
	    }
	    this.database5 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/location'); 
	    this.state = {
	      location: ''
	    }
	}
	componentWillMount(){
		this.startHeaderHeight = 100 + StatusBar.currentHeight;
		this.database.on('value', snap => {
		  this.setState({
		    name: snap.val(),
		  });
		});
		this.database2.on('value', snap => {
		  this.setState({
		    email: snap.val(),
		  });
		});
		this.database3.on('value', snap => {
		  this.setState({
		    password: snap.val(),
		  });
		});
		this.database4.on('value', snap => {
		  this.setState({
		    bio: snap.val(),
		  });
		});
		this.database5.on('value', snap => {
		  this.setState({
		    location: snap.val(),
		  });
		});
	}

    onSaveProfilePress = () => {
        if(firebase.auth().currentUser.name !== this.state.name) {
			changeName = (currentPassword, newName) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updateProfile(this.state.name).then(() => {
			      console.log("Name updated!");
			    }).catch((error) => { console.log(error); });
			  }).catch((error) => { console.log(error); });
			}
		}
        if(firebase.auth().currentUser.currentPassword !== this.state.password) {
			changePassword = (currentPassword, newPassword) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updatePassword(this.state.password).then(() => {
			      console.log("Password updated!");
			    }).catch((error) => { console.log(error); });
			  }).catch((error) => { console.log(error); });
			}
		}
		if(firebase.auth().currentUser.email !== this.state.email) {
			changeEmail = (currentPassword, newEmail) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updateEmail(this.state.email).then(() => {
			      console.log("Email updated!");
			    }).catch((error) => { console.log(error); });
			  }).catch((error) => { console.log(error); });
			}
		}
		// if(this.state.password !== this.state.passwordConfirm) {
  //           Alert.alert("Passwords do not match");
  //           return;
  //       }
	    this.props.navigation.navigate("Main");
    }

	render(){
		return(
			// <Button
			// 	title="Go back"
			// 	onPress={() => this.props.navigation.goBack(null)}
			// />
      
			<KeyboardAvoidingView behavior="padding">
            <View style={{paddingTop:50, alignItems:"center"}}>
	            <Text>Name</Text>
	            <TextInput style={{width:200, height:40, borderWidth:1}}
	                value={this.state.name}
	                onChangeText={(text) => { this.setState({name: text}) } }
	                />
	            <Text>Email</Text>
	            <TextInput style={{width:200, height:40, borderWidth:1}}
	                value={this.state.email}
	                onChangeText={(text) => { this.setState({email: text}) } }
	                />
	            <Text>Location</Text>
	            <TextInput multiline={true} style={{width:200, height:40, borderWidth:1,}}
	                value={this.state.location}
	                onChangeText={(text) => { this.setState({location: text}) } }
	                />
	            <Text>Bio</Text>
	            <TextInput multiline={true} style={{width:200, height:40, borderWidth:1,}}
	                value={this.state.bio}
	                onChangeText={(text) => { this.setState({bio: text}) } }
	                />
	            <Text>Password</Text>
	            <TextInput secureTextEntry={true} style={{width:200, height:40, borderWidth:1, }}
	                value={this.state.password}
	                onChangeText={(text) => { this.setState({password: text}) }}
	                />    
	            <Text>Password Confirm</Text>
	            <TextInput secureTextEntry={true} style={{width:200, height:40, borderWidth:1,}}
	                value={this.state.passwordConfirm}
	                onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
	                />      

            	<Button title="Save Profile" onPress={this.onSaveProfilePress} />    
            </View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
	},
	contentContainer:{
		paddingTop: 20,
	},
});