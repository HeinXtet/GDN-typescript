import React from 'react';
import {View} from 'react-native-animatable';
import {ViewStyle} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle | Array<ViewStyle>;
}
export const Container = (props: ContainerProps) => {
  return (
    <View animation="fadeIn" duration={1000} style={[props.style]}>
      {props.children}
    </View>
  );
};
