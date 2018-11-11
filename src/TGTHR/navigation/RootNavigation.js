import { Notifications } from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';
import MainSplashScreen from './../screens/auth/MainSplashScreen';

const RootStackNavigator = createStackNavigator(
  {
    MainSplash: { screen: MainSplashScreen},
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },

    Main: { screen: MainTabNavigator, },
  }
);

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}