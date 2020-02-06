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
import {Text} from 'react-native';
import store from './src/store/index';
import {Provider} from 'react-redux';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    console.log('Sheme ' + Config.BASE_URL);
  }, []);

  return (
    <Provider store={store}>
      <Text>App</Text>
    </Provider>
  );
};
export default App;
