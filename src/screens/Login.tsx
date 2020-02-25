import React, {useRef} from 'react';
import {Container} from 'native-base';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationScreenProp} from 'react-navigation';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {Styles, Colors} from '../styles/index';
import {SPLASH_BG, LOGO_WHITE} from '../images/index';
import {LoginForm} from '../components/authentication/LoginForm';
import {SperateOr} from '../components/authentication/SperateOr';
import {FacebookLoginButton} from '../components/authentication/FacebookLoginButton';
import {TernAndConditionButton} from '../components/authentication/TermAndConditionButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import crashlytics from '@react-native-firebase/crashlytics';
import {connect, ConnectedProps} from 'react-redux';
import {loginAsync} from '../features/auth/actions';
import {Loader} from '../components';
import {RootState} from 'typesafe-actions';

interface State {}

const mapStateToProps = (state: RootState) => ({
  memberData: state.login.memberData,
  isLoading: state.login.isLoadingAuth,
  loginError: state.login.authError,
});

const dispatchProps = {
  loginWithEmail: loginAsync.request,
  loginCancel: loginAsync.cancel,
};

const connector = connect(mapStateToProps, dispatchProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
export type LoginProps = PropsFromRedux & NavigationProps;

class Login extends React.Component<LoginProps, State> {
  componentDidUpdate(prevProps: LoginProps) {
    console.log('didupdate ' + JSON.stringify(this.props));
  }

  renderForm = () => {
    return (
      <LoginForm
        cancelLogin={this.props.loginCancel}
        navigationProps={this.props.navigation}
        onPressLogin={(email: string, password: string) => {
          this.props.loginWithEmail({
            email,
            password,
            device_type: Platform.OS,
            grant_type: 'password',
            push_notification_token: '',
          });
        }}
      />
    );
  };
  forceCrash() {
    crashlytics().log('Testing crash');
    crashlytics().crash();
  }

  LoginComponent = () => {
    const loaderRef = useRef() as React.MutableRefObject<any>;

    return (
      <Loader
        showDialog={this.props.loginError != null}
        isError={this.props.loginError != null}
        message={this.props.loginError}
        ref={loaderRef}
        isLoading={this.props.isLoading}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{backgroundColor: Colors.colorPrimary, flex: 1}}>
          <Container>
            <ImageBackground
              source={SPLASH_BG}
              style={Styles.fullScreenStatic}
            />
            <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
              {this.renderTopLogo()}
              <FacebookLoginButton
                callback={token => console.log('token ' + token)}
              />
              {this.renderViewLine()}
              {this.renderForm()}
              <TernAndConditionButton
                isAbsolute
                label={'T & C Privacy Policy'}
              />
            </SafeAreaView>
          </Container>
        </KeyboardAwareScrollView>
      </Loader>
    );
  };

  componentWillUnmount() {
    alert('will unmount');
    this.props.loginCancel(undefined, undefined);
  }

  render() {
    return <this.LoginComponent />;
  }

  renderViewLine = () => {
    return <SperateOr />;
  };

  renderTopLogo = () => {
    return <Image source={LOGO_WHITE} style={styles.logoStyle} />;
  };
}

const styles = StyleSheet.create({
  logoStyle: {
    marginTop: 32,
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, dispatchProps)(Login);
