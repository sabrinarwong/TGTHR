import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

class Category extends React.Component {
    render() {
        return (
        <View style={{height:130, width:130, marginLeft:20,borderWidth:0.5, borderColor:'#ddd'}}>
            <View style={{flex:2}}>
                <Image source={this.props.imageUri}
                style={styles.eventImage}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.eventText}>
                    {this.props.name}
                </Text>
            </View>    
        </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    eventText: {
      flex:1,
      paddingTop:10,
      paddingLeft:10,
    },
    eventImage: {
      flex:1,
      width:null,
      height:null,
      resizeMode:'cover',
    },
});