import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Alert,
  } from 'react-native';
import * as firebase from 'firebase';


class viewEvent extends React.Component {

    constructor(props){
        super(props);
        this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
        this.state = {
            name: '',
        }
    }

    onRSVPPress = () => {
        //write the rsvp-ers data in the events list
        var rsvpKey = firebase.database().ref().child('events/' + this.props.eventID + '/rsvp').push().key;
        var updates = {};
        updates['/events/' + this.props.eventID + '/rsvp/' + rsvpKey] = this.state.name;

        firebase.database().ref().update(updates);
        Alert.alert("you have rspv'd to this event.");
    }

    componentWillMount(){
        this.database.on('value', snap => {
            this.setState({
              name: snap.val()
            });
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{alignItems:'center'}}>
                <View style={{height:300, alignItems:'center', padding:20 }}>
                    <Image source={this.props.imageUri}
                    style={styles.eventImage}
                    />
                    <Text style={styles.eventTitle}>
                        {this.props.title}
                    </Text>
                </View>
                
                
                <Text style={styles.topText}>When?</Text>
                <View style={styles.textBorder}>
                    <Text style={styles.text}>{this.props.date}</Text>   
                </View>
                <Text style={styles.topText}>Where?</Text>
                <View style={styles.textBorder}>
                    <Text style={styles.text}>{this.props.location}</Text>
                </View>
                <Text style={styles.topText}>Hosted by:</Text>
                <View style={styles.textBorder}>
                    <Text style={styles.text}>{this.props.host}</Text>
                </View>
                <Text style={styles.topText}>Category:</Text>
                <View style={styles.textBorder}>
                    <Text style={styles.text}>{this.props.category}</Text>
                </View>
                <Text style={styles.topText}>Description:</Text>
                <View style={styles.textBorder}>
                    <Text style={styles.text}>{this.props.description}</Text>
                </View>
                <TouchableHighlight style={styles.buttonContainer2} onPress={this.onRSVPPress}>
                    <Text style={styles.RSVPText}>RSVP</Text>
                </TouchableHighlight>
                </View>
            </ScrollView>   
        );
    }
}

export default viewEvent;

const styles = StyleSheet.create({
    textBorder: {
        borderColor:'blue',
        borderWidth:3,
        borderRadius:5,
        margin:10,
    },
    container: {
        flex:1,
    },
    eventTitle: {
      paddingTop:10,
      
      fontSize:24,
      color:"blue",
    },
    topText: {
        paddingLeft:3,
        color:"grey",
        fontSize:12,
    },
    text: {
        padding:5,
        fontSize:22,
        color:"black",
    },
    eventImage: {
        borderWidth:2,
        borderColor:"black",
        flex:1,
        width:350,
        resizeMode:'cover',
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
    RSVPText: {
        color:'white',
    }
});