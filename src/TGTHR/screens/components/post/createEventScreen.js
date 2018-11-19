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

export default class createEventScreen extends React.Component {
    static navigationOptions = {
        title: 'New Event',
        headerTitleStyle: {
            color: '#9E5EE8',
        },
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
    };

    constructor() {
        super();
        console.ignoredYellowBox = [
            'Setting a timer'
          ];
        this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
	    this.state = {
	      host: ''
	    }
    }

    componentWillMount() {
        this.startHeaderHeight = 100 + StatusBar.currentHeight;
        this.database.on('value', snap => {
            this.setState({
              host: snap.val(),
            });
        });
    }
    
    onCreateEventPress = () => {
        var eventData = {
            host: this.state.host,
            title: this.state.title,
            category: this.state.category,
            date: this.state.date,
            location: this.state.location,
            description: this.state.description
        };
        
        //get a key for a new event
        var newPostKey = firebase.database().ref().child('events').push().key;

        //write the new event's data in the events list
        var updates = {};
        updates['/events/' + newPostKey] = eventData;

        firebase.database().ref().update(updates);

        this.props.navigation.navigate("Events"); //go back to Events page
    }

    render() {
        return(
            // <Text>
            //     test
            // </Text>
			<ScrollView style ={styles.container}>
			<KeyboardAvoidingView behavior="padding" enabled>
            <View style={{/*, alignItems:"left"*/}}>
                <Button
                    title="Create"
                    color='#9E5EE8'
                    onPress={this.onCreateEventPress}
                />
                <TextInput style={{height:60, borderWidth:1}}
                    placeholder="Title"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    value={this.state.title}
                    onChangeText={(text) => { this.setState({title: text}) } }
	                />
                <TextInput style={{height:60, borderWidth:1}}
                    placeholder="Category"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    value={this.state.category}
                    onChangeText={(text) => { this.setState({category: text}) } }
	                />    
                <TextInput style={{height:60, borderWidth:1}}
                    placeholder="Date"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    value={this.state.date}
                    onChangeText={(text) => { this.setState({date: text}) } }
	                />
                <TextInput style={{height:60, borderWidth:1}}
                    placeholder="Location"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    value={this.state.location}
                    onChangeText={(text) => { this.setState({location: text}) } }
	                />        
                <TextInput style={{height:60}}
                    placeholder="Description"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    value={this.state.description}
                    onChangeText={(text) => { this.setState({description: text}) } }
	                />
            </View>
			</KeyboardAvoidingView>
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
});