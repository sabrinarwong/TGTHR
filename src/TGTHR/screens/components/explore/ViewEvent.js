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


class viewEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rsvpList: "",
        };
    }

    onRSVPPress = () => {
        Alert.alert("you have rspv'd to this event.");
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
                <Text style={styles.text}>{this.props.date}</Text>   
                <Text style={styles.topText}>Where?</Text>
                <Text style={styles.text}>{this.props.location}</Text>
                <Text style={styles.topText}>Hosted by:</Text>
                <Text style={styles.text}>{this.props.host}</Text>
                <Text style={styles.topText}>Category:</Text>
                <Text style={styles.text}>{this.props.category}</Text>
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
        paddingLeft:10,
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