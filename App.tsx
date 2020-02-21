/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, StatusBar} from 'react-native';
import store from './src/store/index';
import {Provider} from 'react-redux';
import Config from 'react-native-config';
import AppContainer from './src/navigation/index';
import {Colors} from './src/styles';

const App = () => {
  useEffect(() => {
    console.log('IP Stack API ' + Config.IP_STACK_API_KEY);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.colorPrimary} />
      <AppContainer />
    </Provider>
  );
};
export default App;
