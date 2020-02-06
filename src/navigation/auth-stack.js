import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import {Login} from '../features';

export const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: 'null',
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
