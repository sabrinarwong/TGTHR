import { Notifications } from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import EventsScreen from './../screens/EventsScreen';
import createEventScreen from './../screens/components/post/createEventScreen';

const EventStackNavigator = createStackNavigator(
  {
    Events: { screen: EventsScreen 
        },
    createEvent: { screen: createEventScreen
        },

    Main: { screen: MainTabNavigator },
  }
);

export default class EventNavigator extends React.Component {

  render() {
    return <EventStackNavigator />;
  }
}