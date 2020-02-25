import React, {useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Container, Label, Loader} from '../components';
import {SPLASH_BG} from '../images';
import {Styles} from '../styles';
import {TernAndConditionButton} from '../components/authentication/TermAndConditionButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SperateOr} from '../components/authentication/SperateOr';
import {FacebookLoginButton} from '../components/authentication/FacebookLoginButton';
import {SignUpForm} from '../components/authentication/SignupForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {RootState} from 'typesafe-actions';
import {ConnectedProps, connect} from 'react-redux';
import {NavigationScreenProp} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {signUpAsync} from '../features/auth/actions';

interface State {}

const mapStateToProps = (state: RootState) => ({
  memberData: state.login.memberData,
  isLoading: state.login.isLoadingAuth,
  signUpError: state.login.authError,
});

const dispatchProps = {
  signUpWithEmail: signUpAsync.request,
  signUpCancel: signUpAsync.cancel,
};

const connector = connect(mapStateToProps, dispatchProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
type Props = PropsFromRedux & NavigationProps;

class SignUp extends React.Component<Props, State> {
  renderTopSocial = () => {
    return (
      <Container>
        <Label
          text="Sign up with Socail account"
          style={styles.lbTitleForSocial}
        />
        <FacebookLoginButton
          isCircle
          callback={token => console.log('token ' + token)}
        />
        {SperateOr()}
      </Container>
    );
  };
  keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 20;

  SignUpComponent = () => {
    const loaderRef = useRef() as React.MutableRefObject<any>;

    return (
      <Loader
        showDialog={this.props.signUpError != null}
        isError={this.props.signUpError != null}
        message={this.props.signUpError}
        ref={loaderRef}
        isLoading={this.props.isLoading}>
        <Container style={{flex: 1}}>
          <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />
          <KeyboardAwareScrollView
            style={{backgroundColor: Colors.colorPrimary}}>
            <Container style={{flex: 1}}>
              <SafeAreaView style={{flex: 1}}>
                {this.renderTopSocial()}
                <SignUpForm
                  signUpPressed={request => {
                    console.log('sign up api call ' + JSON.stringify(request));
                    this.props.signUpWithEmail(request);
                  }}
                />
              </SafeAreaView>
            </Container>
            <TernAndConditionButton
              isAbsolute={false}
              label={'T & C Privacy Policy'}
            />
          </KeyboardAwareScrollView>
        </Container>
      </Loader>
    );
  };

  componentWillUnmount() {
    this.props.signUpCancel(undefined, undefined);
  }

  render() {
    return <this.SignUpComponent />;
  }
}

const styles = StyleSheet.create({
  lbTitleForSocial: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default connect(mapStateToProps, dispatchProps)(SignUp);
