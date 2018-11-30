<<<<<<< HEAD
import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	StatusBar,
	ScrollView,
} from 'react-native';
// import { createStackNavigator } from 'react-navigation';

import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component {

	static navigationOptions = {
		title: 'Profile',
		headerTitleStyle: {
			color: '#ffffff',
		},
		headerStyle: {
			backgroundColor: '#9E5EE8',
		},
	};

	constructor(){
			super();
			console.disableYellowBox = true;	// just use this to disable all yellow warnings lol
	    this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
	    this.state = {
	      name: ''
	    }
	    this.database2 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/email'); 
	    this.state = {
	      email: ''
	    }
	    this.database3 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/bio'); 
	    this.state = {
	      bio: ''
	    }
	    this.database4 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/location'); 
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
		this.startHeaderHeight = 100 + StatusBar.currentHeight;
		this.database3.on('value', snap => {
		  this.setState({
		    bio: snap.val(),
		  });
		});
		this.database4.on('value', snap => {
		  this.setState({
		    location: snap.val(),
		  });
		});
	}

	onEditProfilePress = () => {
		this.props.navigation.navigate("editProfile");
	}

	onSignoutPress = () => {
		firebase.auth().signOut();
	}
	  
	render() {
  	return(
		<ScrollView style={styles.container}>
    	<View style={styles.container}>
				{/* display profile picture */}
				{/* FIX: figure out how to display image from database */}
			<View style={styles.profileContainer}>
				<Image source={require('../assets/images/profile/profile.jpg')} style={styles.profileImage}/>
				<View>
					<Text style={styles.nameText}> {this.state.name} {/*firstName lastName */} </Text>
						<Text style={{marginLeft: 20, fontSize: 19}}>{this.state.location}{/* insert user information */} </Text>
					</View>
   			</View>

				{/* display user bio */}
			<View style={styles.informationContainer}>
					<Text style={styles.bioText}><Text>Bio: 
					</Text> {this.state.bio}</Text>

				{/* display profile information */}
				<Text style={styles.infoText}> Email: {this.state.email} {/* insert user information */}</Text>
			</View>

				{/* display social media connected */}
				{/* FIX: if connected then full color.
					if not then grey tone, */}
			<View style={styles.socialView}>
					<TouchableOpacity onPress={this.social1}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/facebook.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/google-plus.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/twitter.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/whatsapp.png')}/>
					</TouchableOpacity>
			</View>
			<View style={styles.center}>			
				<TouchableHighlight style={styles.buttonContainer2} onPress={this.onEditProfilePress}>
					<Text style={styles.text}>Edit Profile</Text>
				</TouchableHighlight> 
				<TouchableHighlight style={styles.buttonContainer2} onPress={this.onSignoutPress}>
					<Text style={styles.text}>Sign Out</Text>
				</TouchableHighlight> 
			</View>
		</View>
		</ScrollView>	
  	);
	}
}


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
	editProfile:{
		alignItems:'center',
		borderWidth: 1,
		padding: 10,
		borderColor: 'black',
    	// backgroundColor: 'blue',
    	borderRadius: 7,
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		flex:1,
	},
	socialView:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 30,
		marginBottom: 30,
	},
	socialImage:{
		flex: 1,
		width: 50,
		height: 50,
		alignItems: 'center',
		resizeMode: 'contain',
	},
});
=======
import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Button,
	StatusBar,
	ScrollView,
} from 'react-native';
// import { createStackNavigator } from 'react-navigation';

import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component {

	static navigationOptions = {
		title: 'Profile',
		headerTitleStyle: {
			color: '#ffffff',
		},
		headerStyle: {
			backgroundColor: '#9E5EE8',
		},
	};

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
	    this.database3 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/bio'); 
	    this.state = {
	      bio: ''
	    }
	    this.database4 = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/location'); 
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
		    bio: snap.val(),
		  });
		});
		this.database4.on('value', snap => {
		  this.setState({
		    location: snap.val(),
		  });
		});

	}

	onEditProfilePress = () => {
		this.props.navigation.navigate("editProfile");
	}

	onSignoutPress = () => {
		firebase.auth().signOut();
	}
	  
	render() {
  	return(
		<ScrollView style={styles.container}>
    	<View style={styles.container}>
				{/* display profile picture */}
				{/* DONE FIX: figure out how to display image from database */}
				{/* FIX: figure out how to update image from database after uploading new one*/}
			<View style={styles.profileContainer}>
				<Image source={this.state.profImageUrl} style={styles.profileImage}/>
				<View>
					<Text style={styles.nameText}> {this.state.name} {/*firstName lastName */} </Text>
						<Text style={{marginLeft: 20, fontSize: 19}}>{this.state.location}{/* insert user information */} </Text>
					</View>
   			</View>

				{/* display user bio */}
			<View style={styles.informationContainer}>
					<Text style={styles.bioText}><Text>Bio: 
					</Text> {this.state.bio}</Text>

				{/* display profile information */}
				<Text style={styles.infoText}> Email: {this.state.email} {/* insert user information */}</Text>
			</View>

				{/* display social media connected */}
				{/* FIX: if connected then full color.
					if not then grey tone, */}
			<View style={styles.socialView}>
					<TouchableOpacity onPress={this.social1}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/facebook.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/google-plus.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/twitter.png')}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.social1} style={styles.socialButton}>
					   <Image style={styles.socialImage} source={require('../assets/images/profile/icons/whatsapp.png')}/>
					</TouchableOpacity>
			</View>

			<Button title="Edit Profile" onPress={this.onEditProfilePress} />
			<Button title="Sign out" onPress={this.onSignoutPress} />
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
		width:100,
		height:100,
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
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
	editProfile:{
		alignItems:'center',
		borderWidth: 1,
		padding: 10,
		borderColor: 'black',
    	// backgroundColor: 'blue',
    	borderRadius: 7,
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		flex:1,
	},
	socialView:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 30,
		marginBottom: 30,
	},
	socialImage:{
		flex: 1,
		width: 50,
		height: 50,
		alignItems: 'center',
		resizeMode: 'contain',
	},
});
>>>>>>> a58d4d84b2f4a93f8faaa72964686dda3b444bb5
