import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class Events extends React.Component{
    render(){
        return (
                <View style={{width:this.props.width/2-30, height:this.props.width/2-30,borderWidth:0.5,borderColor:'#ddd',  marginBottom:20}}>
                    <View style={{flex:1}}>
                      <Image style={{flex:1, width:null,height:null,resizeMode:'cover', }}
                      resizeMethod='resize'
                      source={{uri: this.props.image}}
                      />
                    </View>
                    <View style={{flex:1}} style={{alignItems:'flex-start',
                      justifyContent:'space-evenly', paddingLeft: 10}}>
                      <Text style={{fontSize:14}}>{this.props.title}</Text>
                      <Text style={styles.eventText}>{this.props.location}</Text>
                      <Text style={styles.eventText}>{this.props.date}</Text>
                    </View>
                </View>
        );
    }
}
export default Events;

const styles = StyleSheet.create({
    eventText:{
        fontSize:12, 
        fontWeight:'bold',
      },
});