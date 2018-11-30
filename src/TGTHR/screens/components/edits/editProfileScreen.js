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
		this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid);
		const profRef = firebase.storage().ref().child("profile_images/" + firebase.auth().currentUser.uid);
		const profImageURL = profRef.getDownloadURL();
		this.state = {
			profImageUrl: ''
		}

    this.database1 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
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
		const profRef = firebase.storage().ref().child("profile_images/" + firebase.auth().currentUser.uid);
		const profURL = profRef.getDownloadURL().then((url) => {
			this.setState({
				profImageUrl: {uri: url}
			})
		});
		this.database1.on('value', snap => {
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

  onSaveProfilePress = () => {
  	
    this.props.navigation.navigate("Profile");
  }

	deleteOKButton = () => {
		firebase.auth().currentUser.delete().then(function () {
		  console.log('delete successful?')
		}).catch(function (error) {
		  console.error({error})
		})
		console.log('OK Pressed')
	}

  onDeleteProfilePress = () => {
		Alert.alert(
		  'Delete Account',
		  'Are you sure??',
		  [
		    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		    {text: 'OK', onPress: this.deleteOKButton},
		  ],
		  { cancelable: false }
		)
  }
	render() {
  	return(

		<ScrollView style={styles.container} keyboardDismissMode='on-drag'>
    	<View style={styles.container}>
				{/* edit profile picture */}
				{/* can upload but not show*/}
				<View style={styles.profileContainer}>
					<TouchableOpacity onPress = {this.onChooseImagePress}>
						<Image source={this.state.profImageUrl} style={styles.profileImage}  />
					</TouchableOpacity>
					<View>
						{/* edit firstName lastName */}
						<TextInput 
							style={styles.nameText} 
							value={this.state.name} 
							onChangeText={(name) => this.setState({name})}
						/>
						{/* insert user information */}
						<TextInput 
							style={{marginLeft: 20, fontSize: 19}} 
							onChangeText={(location) => this.setState({location})} 
							value={this.state.location}
						/>
					</View>
				</View>

				{/* edit user bio */}
				<View style={styles.informationContainer}>
					<Text>Bio: </Text>
					<TextInput 
						multiline={true}
						style={styles.bioText} 
						onChangeText={(bio) => this.setState({bio})}
						value={this.state.bio}
					/>

					{/* edit user email */}
					<Text> Email: </Text> 
					<TextInput 
						style={styles.infoText} 
						onChangeText={(email) => this.setState({email})}
						value={this.state.email} 
					/>
				</View>

			{/* FIX: save button does not work */}
			<Button title="Save" onPress={this.onSaveProfilePress} />

			<Button title="DELETE ACCOUNT" onPress={this.onDeleteProfilePress} />
			</View>
		</ScrollView>	
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