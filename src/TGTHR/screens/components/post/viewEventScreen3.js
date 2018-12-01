import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	Alert,
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';
import ViewEvent from '../explore/ViewEvent';
import Category from '../explore/Category';

export default class createEventScreen extends React.Component {
    static navigationOptions = {
        title: 'View Event',
        headerTitleStyle: {
            color: '#9E5EE8',
        },
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
    };

    render() {
        return(
            <KeyboardAvoidingView>
                <View>
                    {/* THIS IS WHAT YOU NEED TO DO: USE '<ViewEvent /> TAG TO VIEW AN EVENT. I MADE IT EASY FOR YOU.
                        SEE HOW ON THE TOP I IMPORT 'VIEW EVENT', WELL JUST DO THAT EZPZ. THEN WHEN A USER PRESSES ON AN EVENT, 
                        FETCH THE EVENT INFORMATION FROM FIREBASE AND PASS IT INTO JUST LIKE THIS: */}
                    <ViewEvent
                    imageUri={{uri: "https://www.ocregister.com/wp-content/uploads/migration/nxo/nxos3b-b88565750z.120151111211653000gjlcrl0l.10.jpg" }}
                    title="Hike to the C!"
                    date="2018-11-30 21:22"
                    location="33.18,-118.4"
                    host="Brandon"
                    category="outdoors"
                    description="Trail to the C behind Goodwins"
                    eventID="-LSY3bFiSN1O9dciNuCg"
                    />
                </View>
            </KeyboardAvoidingView>
		);
    }
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
	contentContainer:{
        paddingTop: 20,
    },
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
    inputContainer: {
        backgroundColor: '#999',
        borderRadius:30,
        width:280,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputContainer2: {
        backgroundColor: '#999',
        borderRadius:15,
        width:280,
        height:100,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        flex:1,
    },
    descriptionInputs:{
        height:200,
        margin:15,
        flex:1,
    },
});