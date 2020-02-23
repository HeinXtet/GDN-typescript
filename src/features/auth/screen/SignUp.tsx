import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Container, Label} from '../../../components';
import {SPLASH_BG} from '../../../images';
import {Styles} from '../../../styles';
import {TernAndConditionButton} from '../../../components/authentication/TermAndConditionButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SperateOr} from '../../../components/authentication/SperateOr';
import {FacebookLoginButton} from '../../../components/authentication/FacebookLoginButton';
import {SignUpForm} from '../../../components/authentication/SignupForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class SignUp extends React.Component {
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

  render() {
    return (
      <Container style={{flex: 1}}>
        <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />
        <KeyboardAwareScrollView style={{backgroundColor: Colors.colorPrimary}}>
          <Container style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
              {this.renderTopSocial()}
              <SignUpForm signUpPressed={() => {}} />
            </SafeAreaView>
          </Container>
          <TernAndConditionButton
            isAbsolute={false}
            label={'T & C Privacy Policy'}
          />
        </KeyboardAwareScrollView>
      </Container>
    );
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

export default SignUp;
