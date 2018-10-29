import React, { Component } from 'react';
// import ProfileImage from '../assets/images/profile/'
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Button,
	ScrollView,
} from 'react-native';

export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Profile',
	};
	render() {
  	return(
  		<ScrollView>
    	<View style={styles.container}>

					{/* display profile picture */}
    			<View style={styles.profileContainer}>
    				<Image source={require('../assets/images/profile/profile.jpg')} style={styles.profileImage}/>
    				<Text style={styles.nameText}> Sabrina Wong {/*firstName lastName */} </Text>
       		</View>
					{/* display user bio */}

					{/* display profile information */}
    			<View style={styles.informationContainer}>
    				<Text style={styles.infoText}> Email: swong040@ucr.edu {/* insert user information */}</Text>
    				<Text style={styles.infoText}> City: Riverside, CA {/* insert user information */} </Text>
    			</View>
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
		alignItems: 'center',
		marginTop: 40,
		marginBottom: 20,
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
		marginBottom: 10,
	},
	informationContainer:{
		alignItems: 'left',
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 15,
	},
	nameText:{
		fontSize: 27,
	},
	infoText:{
		fontSize: 17,
	},
	
});