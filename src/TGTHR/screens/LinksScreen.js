import React, { Component } from 'react';
import { ScrollView, StyleSheet, SectionList, AppRegistry, Text, View, RefreshControl } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { sectionListData } from '../data/sectionListData';

class SectionListItem extends Component {
    render() {

        return (
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
                }}>{this.props.item.posterName}
                </Text>
                <Text style={{
                    marginVertical: 5,
                    marginHorizontal: 10,
                    fontSize: 17,
                    fontWeight: 'bold',
                }}>{this.props.item.eventName}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    marginHorizontal: 10,
                    fontSize: 15,
                }}>{this.props.item.description}
                </Text>
            </View>
        );
    }
}

class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(247, 247, 247, 1.0)',
            }}>
                <Text style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>{this.props.section.title}
                </Text>
            </View>
        )
    }
}

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
  state = {
      data: [],
      refreshing: false
  };
  fetchData = async () => {

  };
  _onRefresh() {
      this.setState({ refreshing: true });
      this.fetchData().then(() => {
          this.setState({ refreshing: false })
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
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <SectionList
            renderItem={({ item, index }) => {
                return (<SectionListItem item={item} index={index} >

                </SectionListItem>);
            }}
            renderSectionHeader={({ section }) => {
                return (<SectionHeader section={section} />);
            }}
            sections={sectionListData}
            keyExtractor={(item, index) => item.eventName}
            ItemSeparatorComponent={this.renderSeparator}
        />
        refreshControl = {
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
            />
        }
      </ScrollView>
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
});
