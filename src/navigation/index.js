import React from 'react';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import {Splash, Login} from '../screens';
import {AuthStack} from './auth-stack';

const AppContainer = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      Splash: Splash,
      Login: AuthStack,
    },
    {
      initialRouteName: 'Splash',
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={500}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
      transitionViewStyle: 'gray',
    },
  ),
);
export default AppContainer;
