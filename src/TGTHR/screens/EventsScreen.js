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

    }
    componentWillMount(){
        this.database.on('value', snap => {
            this.setState({
              name: snap.val(),
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

    var sectionListData = [
    ];
    var testString = "";
    
    // sectionListData[0].title=this.state.name;

    let title;
    var data = [{title, title, title}];

    var selectionItem = {title, data};
    firebase.database().ref().child('events').on('value', function(snapshot) {
        numEvents = snapshot.numChildren(); 
        snapshot.forEach(function(item) {
            var obj = item.val();
            selectionItem.title = obj.date;
            selectionItem.data[0].posterName = obj.host;
            selectionItem.data[0].eventName = obj.title;
            selectionItem.data[0].description = obj.description;
            console.log(obj.title);
            console.log(sectionListData.length);
            sectionListData.push(selectionItem);
        });
    });    

    sectionListData.push(selectionItem);
    sectionListData.push(selectionItem);
    sectionListData.push(selectionItem);
    sectionListData.push(selectionItem);
    sectionListData.push(selectionItem);
    // sectionListData.push(selectionItem);
    // sectionListData.push(selectionItem);

    var hello = "hell world";

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
                        }}>{item.posterName}
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
            sections={sectionListData}
            keyExtractor={(item, index) => item.eventName}
            ItemSeparatorComponent={this.renderSeparator}
            refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
       
        />
        <ActionButton buttonColor="#9E5EE8">
          <ActionButton.Item buttonColor='#9E5EE8' title="New Event" onPress={() => this.props.navigation.navigate('createEvent')}>
            <TabBarIcon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9E5EE8' title="Test Screen" onPress={() => this.props.navigation.navigate('viewEvent')}>
            <TabBarIcon name="md-create" style={styles.actionButtonIcon} />
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