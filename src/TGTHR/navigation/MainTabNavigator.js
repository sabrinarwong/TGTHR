import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import editProfileScreen from './../screens/components/edits/editProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import MapsScreen from '../screens/MapsScreen';
import createEventScreen from '../screens/components/post/createEventScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />
  ),
};

const EventsStack = createStackNavigator({
  Events: EventsScreen,
  createEvent: createEventScreen,
});

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-list'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  editProfile: editProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-person'}
    />
  ),
};

const MapsStack = createStackNavigator({
  Maps: MapsScreen,
});

MapsStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-map'}
    />
  ),
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  EventsStack,
  MapsStack,
  ProfileStack,
  AboutStack,
});
