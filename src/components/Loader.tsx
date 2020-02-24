import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';
import {Container} from './Container';
import {Styles} from '../styles';
import {ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {MessageModal} from './MessageModal';

interface LoaderProps {
  children: React.ReactNode;
  isLoading?: boolean;
  style?: ViewStyle | Array<ViewStyle>;
  message?: string;
  title?: string;
  fullscreenError?: boolean;
  retryEnable?: boolean;
  showDialog?: boolean;
  isError?: boolean;
}

export const Loader = forwardRef((props: LoaderProps, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle() {
      setShow(!show);
    },
  }));

  useEffect(() => {
    setShow(true);
  }, [props.message]);

  return (
    <Container style={{flex: 1}}>
      {props.children}
      {props.isLoading ? loading() : null}
      {props.showDialog ? (
        <MessageModal
          isVisible={show}
          positiveButtonCallback={() => {
            setShow(false);
          }}
          title={props.isError ? 'Warning' : 'Success'}
          message={props.message}
          isOnlyPositiveButton
          positiveButtonTitle={props.isError ? 'CLOSE' : 'OK'}
        />
      ) : null}
    </Container>
  );
});

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
