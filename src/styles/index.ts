import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const Colors = {
  colorPrimary: 'pink',
  colorWhite: 'white',
};

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NavigationStyle = {
  navigationOptions: {
    headerShown: true,
    headerTintColor: Colors.colorWhite,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: Colors.colorPrimary,
    },
  },
};

const Styles = StyleSheet.create({
  fullScreenStatic: {
    position: 'absolute',
    height: HEIGHT,
    backgroundColor : Colors.colorPrimary,
    width: WIDTH,
  },
});

export {Colors, NavigationStyle,Styles};
