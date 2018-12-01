import { Notifications } from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import EventsScreen from './../screens/EventsScreen';
import createEventScreen from './../screens/components/post/createEventScreen';
import viewEventScreen from './../screens/components/post/viewEventScreen';
import viewEventScreen2 from './../screens/components/post/viewEventScreen2';
import viewEventScreen3 from './../screens/components/post/viewEventScreen3';

const EventStackNavigator = createStackNavigator(
  {
    Events: { screen: EventsScreen 
        },
    createEvent: { screen: createEventScreen
        },
    viewEvent1: { screen: viewEventScreen
        },    
        viewEvent2: { screen: viewEventScreen2
        },  
        viewEvent3: { screen: viewEventScreen3
        },  

    Main: { screen: MainTabNavigator },
  }
);

export default class EventNavigator extends React.Component {

  render() {
    return <EventStackNavigator />;
  }
}