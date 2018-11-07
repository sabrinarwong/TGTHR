import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Button,
  SafeAreaView,
  TextInput,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon';
import Category from './components/explore/Category';

const{height,width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  
  static navigationOptions = {
    header: null,
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
  }

  componentWillMount(){
    this.startHeaderHeight = 100 + StatusBar.currentHeight;
    this.database.on('value', snap => {
      this.setState({
        name: snap.val()
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.flex1}>
          <View style={styles.topBar}>
            <View style={styles.topBarContents}>
              <TabBarIcon name='md-search' />
              <TextInput 
                placeholder="Try 'Paris'"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
                style={styles.topBarText}
              />
            </View>
          </View>
          <ScrollView style={{backgroundColor:'white'}}>
            <View> 
              <Text style={styles.headerText}>
                What can we help you with, {this.state.name}?
              </Text>
              
              <View style={{height:130, marginTop:20}}>
                <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category 
                  imageUri={require('../assets/images/tgthr.png')}
                  name="Home"
                  />

                  <Category 
                  imageUri={require('../assets/images/robot-dev.png')}
                  name="not home"
                  />

                  <Category 
                  imageUri={require('../assets/images/robot-prod.png')}
                  name="yes haha"
                  />

                  <Category 
                  imageUri={require('../assets/images/tgthr.png')}
                  name="Home"
                  />

                  <Category 
                  imageUri={require('../assets/images/robot-dev.png')}
                  name="not home"
                  />

                  <Category 
                  imageUri={require('../assets/images/robot-prod.png')}
                  name="yes haha"
                  />

                </ScrollView>  
              </View>
              <View style={{marginTop:40, paddingHorizontal:20}}>
                <Text style={{fontSize:24, fontWeight:'700'}}>
                  Event of the Day
                </Text>
                <Text style={{fontWeight:'100',marginTop:10}}>
                  Unique event hand picked daily by our staff
                </Text>

                <View style={{width:width-40, height:200, marginTop:20}}>
                <Image
                  style={styles.staffPickImage}
                  source={require('../assets/images/robot-dev.png')}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  staffPickImage:{
    flex:1, 
    height:null,
    width:null,
    resizeMode:'cover',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#ddd',
  },
  headerText: {
    fontSize:24,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  topBarContents: {
    flexDirection:'row',
    padding: 10,
    backgroundColor:'white', 
    // marginHorizontal:20,
    marginTop: StatusBar.currentHeight,
    elevation:1,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius:20,
  },
  topBarText: {
    flex:1,
    fontWeight:'700',
    backgroundColor:'white',
    marginLeft:10,
  },
  topBar: {
    height:this.startHeaderHeight,
    backgroundColor:'white',
    borderBottomColor:'#ddd', 
    borderBottomWidth:1,
    padding:10,
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 75,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 80,
    resizeMode: 'center',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  buttonMain: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  tgthrMain: {
    fontSize: 35,
    color: '#9E5EE8',
    lineHeight:50,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    marginLeft:30,
    marginRight:30,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
