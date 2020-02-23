import React from 'react';
import {Container} from './Container';
import {Styles} from '../styles';
import {ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

interface LoaderProps {
  children: React.ReactNode;
  isLoading?: boolean;
  style?: ViewStyle | Array<ViewStyle>;
}

export const Loader = (props: LoaderProps) => {
  return (
    <Container style={{flex: 1}}>
      {props.children}
      {props.isLoading ? loading() : null}
    </Container>
  );
};

const loading = () => {
  return (
    <Container
      style={[Styles.fullScreenStatic, {backgroundColor: 'transparent'}]}>
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          source={require('../lottie/loader.json')}
          style={{height: 100, width: 100}}
          autoPlay
          loop
        />
      </Container>
    </Container>
  );
};
