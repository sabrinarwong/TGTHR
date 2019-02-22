import { Notifications } from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import ProfileScreen from './../screens/ProfileScreen';
import editProfileScreen from './../screens/components/edits/editProfileScreen';

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: { screen: ProfileScreen 
    	// navigationOptions:{
     //        title: "Profile",}
        },
    editProfile: { screen: editProfileScreen
    	// navigationOptions:{
     //        title: "Edit Profile", }
        },

    Main: { screen: MainTabNavigator },
  }
);

export default class ProfileNavigator extends React.Component {

  render() {
    return <ProfileStackNavigator />;
  }
}