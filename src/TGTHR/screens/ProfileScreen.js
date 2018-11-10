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
	    this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/email'); 
	    this.state = {
	      email: ''
	    }
	}

	componentWillMount(){
		this.startHeaderHeight = 100 + StatusBar.currentHeight;
		this.database.on('value', snap => {
		  this.setState({
		    name: snap.val(),
		    email: snap.val(),
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
			<View style={styles.profileContainer}>
				<Image source={require('../assets/images/profile/profile.jpg')} style={styles.profileImage}/>
				<View>
					<Text style={styles.nameText}> {this.state.name} {/*firstName lastName */} </Text>
						<Text style={{marginLeft: 20, fontSize: 19}}> Riverside, CA {/* insert user information */} </Text>
					</View>
   			</View>

				{/* display user bio */}
			<View style={styles.informationContainer}>
					<Text style={styles.bioText}><Text>Bio: </Text>
					Spent high school summers managing jump ropes in Fort Walton Beach, FL. Spent college summers promoting wooden trains for no pay. Had a brief career getting my feet wet with easy-bake-ovens in Atlantic City, NJ.
					</Text>

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
