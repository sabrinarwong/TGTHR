import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={{flex:1,flexDirection:'column',justifyContent:'space-around'}}>
            <View style={{width:80,height:80,backgroundColor:'powderblue'}} />
            <View style={{width:80,height:80,backgroundColor:'skyblue'}} />
            <View style={{width:80,height:80,backgroundColor:'steelblue'}} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
