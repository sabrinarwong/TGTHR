import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	ScrollView,
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import * as firebase from 'firebase';
import { ImagePicker } from 'expo';


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
	    // this.storage = firebase.storage().ref().child("profile_images/" + firebase.auth().currentUser.uid); 
	    // this.state = {
	    //   profileImage: ''
	    // }
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
		// this.storage.on('value', snap => {
		//   this.setState({
		//     profileImage: snap.val(),
		//   });
		// });
	}

	onChooseImagePress = async () => {
		let result = await ImagePicker.launchImageLibraryAsync();

		if(!result.cancelled){
			this.uploadImage(result.uri, firebase.auth().currentUser.uid)
			.then(() => {
				Alert.alert("upload success");
			})
			.catch((error) => {
				Alert.alert(error);
			})
		}
	}

	uploadImage = async (uri, imageName) => {
		const response = await fetch(uri);
		const blob = await response.blob();

		var ref = firebase.storage().ref().child("profile_images/" + imageName);
		return ref.put(blob);
	}

	// THIS DOESNT WORK WAAAAA
    onSaveProfilePress = () => {
        if(firebase.auth().currentUser.name !== this.state.name) {
			changeName = (currentPassword, newName) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updateProfile(this.state.name).then(() => {
			      Alert.alert("Name updated!");
			    }).catch((error) => { Alert.alert(error); });
			  }).catch((error) => { Alert.alert(error); });
			}
		}
        if(firebase.auth().currentUser.currentPassword !== this.state.password) {
			changePassword = (currentPassword, newPassword) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updatePassword(this.state.password).then(() => {
			      Alert.alert("Password updated!");
			    }).catch((error) => { Alert.alert(error); });
			  }).catch((error) => { Alert.alert(error); });
			}
		}
		if(firebase.auth().currentUser.email !== this.state.email) {
			changeEmail = (currentPassword, newEmail) => {
			  this.reauthenticate(currentPassword).then(() => {
			    // var user = firebase.auth().currentUser;
			    firebase.auth().currentUser.updateEmail(this.state.email).then(() => {
			      Alert.alert("Email updated!");
			    }).catch((error) => { Alert.alert(error); });
			  }).catch((error) => { Alert.alert(error); });
			}
		}
		Alert.alert("Save successful");
	  this.props.navigation.navigate("Main");
    }

	render() {
  	return(
		<ScrollView style={styles.container}>
    	<View style={styles.container}>
			
			{/* edit profile picture */}
			{/* can upload but not show*/}
			<View style={styles.profileContainer}>
				<Button title = "Choose image..." onPress = {this.onChooseImagePress} />

				<View>
					{/* edit firstName lastName */}
					<TextInput 
						style={styles.nameText} 
						value={this.state.name} 
						onChangeText={(text) => { 
							this.setState({name: text})}}/>
					{/* insert user information */}
					<TextInput 
						style={{marginLeft: 20, fontSize: 19}} 
						value={this.state.location}
						onChangeText={(text) => { this.setState({location: text}) } } />
				</View>
   			</View>

				{/* edit user bio */}
			<View style={styles.informationContainer}>
				<Text>Bio: </Text>
				<TextInput 
					multiline={true}
					style={styles.bioText} 
					value={this.state.bio}
					onChangeText={(text) => { this.setState({bio: text}) } }/>

				{/* edit user email */}
				<Text> Email: </Text> 
				<TextInput 
					style={styles.infoText} 
					value={this.state.email} 
					onChangeText={(text) => { this.setState({email: text}) } }/>
			</View>

			<View style={styles.center}>
				<TouchableHighlight style={styles.buttonContainer2} onPress={this.onSaveProfilePress} >
					<Text style={styles.text}>Save</Text>
				</TouchableHighlight>
			</View>
		</View>
		</ScrollView>	
  	);
	}
}


	// render(){
	// 	return(
	// 		// <Button
	// 		// 	title="Go back"
	// 		// 	onPress={() => this.props.navigation.goBack(null)}
	// 		// />
      
	// 		<KeyboardAvoidingView behavior="padding">
 //            <View style={{paddingTop:50, alignItems:"center"}}>
	//             <Text>Name</Text>
	//             <TextInput style={{width:200, height:40, borderWidth:1}}
	//                 value={this.state.name}
	//                 onChangeText={(text) => { this.setState({name: text}) } }
	//                 />
	//             <Text>Email</Text>
	//             <TextInput style={{width:200, height:40, borderWidth:1}}
	//                 value={this.state.email}
	//                 onChangeText={(text) => { this.setState({email: text}) } }
	//                 />
	//             <Text>Location</Text>
	//             <TextInput multiline={true} style={{width:200, height:40, borderWidth:1,}}
	//                 value={this.state.location}
	//                 onChangeText={(text) => { this.setState({location: text}) } }
	//                 />
	//             <Text>Bio</Text>
	//             <TextInput multiline={true} style={{width:200, height:40, borderWidth:1,}}
	//                 value={this.state.bio}
	//                 onChangeText={(text) => { this.setState({bio: text}) } }
	//                 />
	//             <Text>Password</Text>
	//             <TextInput secureTextEntry={true} style={{width:200, height:40, borderWidth:1, }}
	//                 value={this.state.password}
	//                 onChangeText={(text) => { this.setState({password: text}) }}
	//                 />    
	//             <Text>Password Confirm</Text>
	//             <TextInput secureTextEntry={true} style={{width:200, height:40, borderWidth:1,}}
	//                 value={this.state.passwordConfirm}
	//                 onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
	//                 />      

 //            	<Button title="Save Profile" onPress={this.onSaveProfilePress} />    
 //            </View>
	// 		</KeyboardAvoidingView>
	// 	);
	// }
// }

const styles = StyleSheet.create({
	center:{
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		color:"white",
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
	container:{
		flex: 1,
		backgroundColor: '#fff',
	},
	contentContainer:{
		paddingTop: 20,
	},
	profileContainer:{
		flexDirection: 'row',
		marginTop: 40,
		margin: 15,
	},
	profileImage:{
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:100,
		height:100,
		backgroundColor:'#fff',
		borderRadius:50,
		marginBottom: 5,
	},
	informationContainer:{
		alignItems: 'center',
		marginTop: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 15,
	},
	bioText:{
		alignItems: 'center',
		fontSize: 16,
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 15,
	},
	nameText:{
		fontSize: 30,
		margin: 15,
		marginBottom: 5,
	},
	infoText:{
		fontSize: 19,
	},

});