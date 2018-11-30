import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  StatusBar,
  Dimensions,
  Alert,
  Button,
  Linking,
} from 'react-native';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon';
import Category from './components/explore/Category';
import Events from './components/explore/Events';

const{height,width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {


  // static navigationOptions = {
  //   header: null,
  // };

  static navigationOptions = {
    title: 'Home',
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
      name: '',
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

  onNearbyPress = () => {
		this.props.navigation.navigate("Maps");
  }
  onEventsPress = () => {
		this.props.navigation.navigate("Events");
	}

  render() {
  

    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.flex1}>
          {/* <View style={styles.topBar}>
            <View style={styles.topBarContents}>
              <TabBarIcon name='md-search' />
              <TextInput 
                placeholder="Try 'Paris'"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
                style={styles.topBarText}
              />
            </View>
          </View> */}

          <ScrollView style={{backgroundColor:'white'}}>
            <View> 
              <Text style={styles.headerText}>
                What can we help you with, {this.state.name}?
              </Text>
            
              <View style={{height:130, marginTop:20}}>
                <ScrollView 
                  horizontal={true}
                  style={{marginRight:20}}
                  showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={ this.onEventsPress }>
                  <Category 
                  // imageUri={require('../assets/images/tgthr.png')}
                  imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fparis.png?alt=media&token=e7bbb93b-650c-4e82-9b7d-34aafc066bc7'}}
                  name="Explore"
                  />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={ this.onEventsPress }>
                    <Category 
                    imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fdining.jpg?alt=media&token=e4cf3b5a-d114-401f-9cd9-d03dd9616551'}}
                    name="Dining"
                    />
                  </TouchableOpacity>
                
                  <TouchableOpacity onPress={ this.onNearbyPress }>
                    <Category 
                    imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fnearby-icon-3.jpg?alt=media&token=3e2eef3f-a38c-4d5b-a05c-6bc2c84eaa76'}}
                    name="Nearby"
                    />
                  </TouchableOpacity>  

                  <TouchableOpacity onPress={ this.onEventsPress }>
                  <Category 
                  imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fhiking.jpg?alt=media&token=fce4494d-1e52-403d-a915-7fee5aa476b3'}}
                  name="Outdoors"
                  />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={ this.onEventsPress }>
                  <Category 
                  imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Ftabletopgaming.jpg?alt=media&token=80a88e4b-5eb0-4dc4-8ed5-aa8e71c422d5'}}
                  name="Tabletop Gaming"
                  />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={ this.onEventsPress }>
                  <Category 
                  imageUri={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fnightlife.jpg?alt=media&token=a511e0f8-da52-4660-b874-f1b7c4f463d3'}}
                  name="Night Life"
                  />
                  </TouchableOpacity>

                </ScrollView>  
              </View>
              <View style={{marginTop:40, paddingHorizontal:20}}>
                <Text style={{fontSize:24, fontWeight:'700'}}>
                  Event of the Day
                </Text>
                <Text style={{fontWeight:'100',marginTop:10}}>
                  Unique events, hand picked daily by our staff
                </Text>

                <TouchableOpacity onPress={ this.onEventsPress }>
                <View style={{width:width-40, height:200, marginTop:20}}>
                <Image
                  style={styles.staffPickImage}
                  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fkayaking.jpg?alt=media&token=8e2112b1-5b31-4683-b9e9-e290fb9e9460'}}
                  />
                </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:40, paddingHorizontal:20}}>
                <Text style={{fontSize:24, fontWeight:'700'}}>
                  The BTTR TGTHR Blog
                </Text>
                <Text style={{fontWeight:'100',marginTop:10}}>
                  Top tier articles written by the best TGTHR has to offer
                </Text>
                <TouchableWithoutFeedback onPress={ ()=> Linking.openURL('https://ryanyuzuki.com/tgthr') }>
                  <View style={{width:width-40, height:200, marginTop:20}}>
                  <Image
                    style={styles.staffPickImage}
                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fdesk.PNG?alt=media&token=3d7b9a5f-119c-48bb-9732-5411bd53af83'}}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>  
              <View style={{ marginTop: 40}} >
                <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal:20}}>
                  Nearby Events {this.state.img1}
                </Text>
                <View style={{paddingHorizontal:20, marginVertical:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between' }}>
                <TouchableOpacity onPress={ this.onEventsPress }>
                  <Events width={width}
                    image="https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Ftenrens.jpg?alt=media&token=9e430f58-590c-4c2f-ad9c-3c546033232b"
                    title="Ten Ren's secret meetup"
                    location="Ten Ren's Riverside"
                    date="November 22nd" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.onEventsPress }>
                  <Events width={width}
                    image="https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fucrbelltower.jpg?alt=media&token=9fa28a11-c81c-41ac-822b-4251ef4ca95b"
                    title="Cry about finals"
                    location="UCR bell tower"
                    date="December 7th" />
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.onEventsPress }>
                  <Events width={width}
                    image="https://firebasestorage.googleapis.com/v0/b/cs180-tgthr.appspot.com/o/images%2Fnetflix.png?alt=media&token=0d5a11a2-4f63-41bf-8493-baae39596efc"
                    title="Procrastinate CS180 project"
                    location="UCR WCH"
                    date="November 9th" />
                </TouchableOpacity>
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
