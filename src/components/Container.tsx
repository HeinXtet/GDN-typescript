import React from 'react';
// import {View} from 'react-native-animatable';
import {ViewStyle, View, StyleProp} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export const Container = (props: ContainerProps) => {
  return <View style={[props.style]}>{props.children}</View>;
};
