import React from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    SectionList, 
    AppRegistry, 
    Text, View, 
    RefreshControl, 
    Header, 
    SectionListItem, 
    Button,
    Alert,
    Image,
} from 'react-native';
import ActionButton from 'react-native-action-button';
// import { sectionListData } from '../data/sectionListData';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon';







export default class EventsScreen extends React.Component {
  static navigationOptions = {
      title: 'Events',
      headerTitleStyle: {
          color: '#ffffff',
      },
      headerStyle: {
          backgroundColor: '#9E5EE8',
      },
    };

    constructor() {
        super();
        this.state = { 
            refreshing: false,
            data: [],
            name:'placeholder',
        };
        // this.database = firebase.database().ref().child("/events/-LRdgRY8KahA9fPBvJUm/title");
        this.database = firebase.database().ref().child('users/yIYJ4NbWSDdgEU6GEvkaeJP5hQA3/bio');
        // this.database = firebase.database().ref().child('/users/' + firebase.auth().currentUser.uid + '/name'); 
        // this.database = firebase.database().ref().child('events');
        this.state = {
            date1:'',
            date2:'',
            date3:'',
            name1:'',
            name2:'',
            name3:'',
            title1:'',
            title2:'',
            title3:'',
            image1:'',
            image2:'',
            image3:'',
        };
       
        
    }
    componentWillMount(){
        var ref1 = firebase.database().ref().child('events/-LSLgf7IckhqExqy64XT/date');
        var ref2 = firebase.database().ref().child('events/-LSLgf7IckhqExqy64XT/host');
        var ref3 = firebase.database().ref().child('events/-LSLgf7IckhqExqy64XT/title');
        var ref4 = firebase.database().ref().child('events/-LSVlyz-KDXvNnP454wY/date');
        var ref5 = firebase.database().ref().child('events/-LSVlyz-KDXvNnP454wY/host');
        var ref6 = firebase.database().ref().child('events/-LSVlyz-KDXvNnP454wY/title');
        var ref7 = firebase.database().ref().child('events/-LSY3bFiSN1O9dciNuCg/date');
        var ref8 = firebase.database().ref().child('events/-LSY3bFiSN1O9dciNuCg/host');
        var ref9 = firebase.database().ref().child('events/-LSY3bFiSN1O9dciNuCg/title');
        var refi1 = firebase.database().ref().child('events/-LSLgf7IckhqExqy64XT/image');
        var refi2 = firebase.database().ref().child('events/-LSVlyz-KDXvNnP454wY/image');
        var refi3 = firebase.database().ref().child('events/-LSY3bFiSN1O9dciNuCg/image');
        ref1.on('value', snap => {
            this.setState({
                date1: snap.val()
            });
        });
        ref2.on('value', snap => {
            this.setState({
                name1: snap.val()
            });
        });
        ref3.on('value', snap => {
            this.setState({
                title1: snap.val()
            });
        });
        ref4.on('value', snap => {
            this.setState({
                date2: snap.val()
            });
        });
        ref5.on('value', snap => {
            this.setState({
                name2: snap.val()
            });
        });
        ref6.on('value', snap => {
            this.setState({
                title2: snap.val()
            });
        });
        ref7.on('value', snap => {
            this.setState({
                date3: snap.val()
            });
        });
        ref8.on('value', snap => {
            this.setState({
                name3: snap.val()
            });
        });
        ref9.on('value', snap => {
            this.setState({
                title3: snap.val()
            });
        });
        refi1.on('value', snap => {
            this.setState({
                image1: snap.val()
            });
        });
        refi2.on('value', snap => {
            this.setState({
                image2: snap.val()
            });
        });
        refi3.on('value', snap => {
            this.setState({
                image3: snap.val()
            });
        });    
    };

  fetchData (){

  };
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  renderSeparator = () => {
      return (
          <View
              style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#CED0CE",
                  /*marginLeft: "14%"*/
              }}
          />
      );
  };
  render() {

    
    // var testString = "";
    
    // sectionListData[0].title=this.state.name;

    // let title;
    // var data = [{title, title, title}];

    // This is supposed to fetch from firebase events and push to sectionListData but it doesn't... (console.log does however.)

    
    // firebase.database().ref().child('events').on('value', function(snapshot) {
    //     numEvents = snapshot.numChildren(); 
    //     snapshot.forEach(function(item) {
    //         var obj = item.val();
    //         selectionItem.title = obj.date;
    //         selectionItem.data[0].posterName = obj.host;
    //         selectionItem.data[0].eventName = obj.title;
    //         selectionItem.data[0].description = obj.description;
    //         console.log(obj.title);
    //         console.log(sectionListData.length);
    //         sectionListData.push(selectionItem);
    //     });
    // });    

    
    this.selectionItem =  {
        data: [
            {
                posterName : this.state.name1,
                eventName : this.state.title1,
                description : this.state.date1,
                image: this.state.image1,
            },
        ],
        title : this.state.date1,
    };
    this.selectionItem2 =  {
        data: [
            {
                posterName : this.state.name2,
                eventName : this.state.title2,
                description : this.state.date2,
                image: this.state.image2,
            },
        ],
        title : this.state.date2,
    };
    this.selectionItem3 =  {
        data: [
            {
                posterName : this.state.name3,
                eventName : this.state.title3,
                description : this.state.date3,
                image: this.state.image3,
            },
        ],
        title : this.state.date3,
    };

    this.sectionListData = [];

    this.sectionListData.push(this.selectionItem);
    this.sectionListData.push(this.selectionItem2);
    this.sectionListData.push(this.selectionItem3);

    // this.selectionItem2 =  {title2, data2};

    // this.selectionItem.title = this.state.date1;
    // this.selectionItem.data[0].posterName = this.state.name1;
    // this.selectionItem.data[0].eventName = this.state.title1;
    // this.selectionItem.data[0].description = this.state.date1;

    // this.sectionListData[0] = this.selectionItem;

    // this.selectionItem2.title = this.state.date2;
    // this.selectionItem2.data[0].posterName = this.state.name2;
    // this.selectionItem2.data[0].eventName = this.state.title2;
    // this.selectionItem2.data[0].description = this.state.date2; 

    // this.sectionListData[1] = this.selectionItem2;

    // this.sectionListData.push(this.selectionItem);

    // this.selectionItem.title = this.state.date3;
    // this.selectionItem.data[0].posterName = this.state.name3;
    // this.selectionItem.data[0].eventName = this.state.title3;
    // this.selectionItem.data[0].description = this.state.date3;

    // this.sectionListData.push(this.selectionItem);
    // this.sectionListData.push(this.selectionItem);
    // this.sectionListData.push(this.selectionItem);
    // this.sectionListData.push(this.selectionItem);
    // this.sectionListData.push(this.selectionItem);

    return (
      <View style={styles.container}>
        <SectionList
            renderSectionHeader={({ section }) => 
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(247, 247, 247, 1.0)',
                    }}>
                        <Text style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>{section.title}
                        </Text>
                    </View>
            }
            renderItem={({ item }) => 
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#fff'
                    }}> 
                        <Text style={{
                            marginTop: 10,
                            marginHorizontal: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#a4adbc' //gray
                        }}>Hosted by {item.posterName}
                        </Text>
                        <Text style={{
                            marginVertical: 5,
                            marginHorizontal: 10,
                            fontSize: 17,
                            fontWeight: 'bold',
                        }}>{item.eventName}
                        </Text>
                        <Text style={{
                            marginBottom: 10,
                            marginHorizontal: 10,
                            fontSize: 15,
                        }}>{item.description}
                        </Text>
                    </View>
            }
            sections={this.sectionListData}
            
            keyExtractor={(item, index) => item.eventName}
            ItemSeparatorComponent={this.renderSeparator}
            // refreshControl={
            //     <RefreshControl
            //       refreshing={this.state.refreshing}
            //       onRefresh={this._onRefresh}
            //     />
            //   }
       
        />
        <ActionButton buttonColor="#9E5EE8">
          <ActionButton.Item buttonColor='#9E5EE8' title="New Event" onPress={() => this.props.navigation.navigate('createEvent')}>
            <TabBarIcon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9E5EE8' title={this.selectionItem.title} onPress={() => this.props.navigation.navigate('viewEvent')}>
            <TabBarIcon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9E5EE8' title={this.selectionItem2.title} onPress={() => this.props.navigation.navigate('viewEvent2')}>
            <TabBarIcon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9E5EE8' title={this.selectionItem3.title} onPress={() => this.props.navigation.navigate('viewEvent3')}>
            <TabBarIcon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          </ActionButton>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
    },
  divider: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
  },
  SectionHeader: {

  }
});
