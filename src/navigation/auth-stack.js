import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import React from 'react';
import {Login, SignUp, ForgotPassword} from '../features';
import {Colors, NavigationStyle} from '../styles';

export const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      title: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      ...NavigationStyle.navigationOptions,
      headerTitle: 'Sign Up',
      headerBackTitle: null,
      headerTruncatedBackTitle: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      ...NavigationStyle.navigationOptions,
      headerTitle: 'Forgot Password',
    },
  },
});
