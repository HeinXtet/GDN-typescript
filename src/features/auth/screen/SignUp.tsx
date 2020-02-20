import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Container, Label} from '../../../components';
import {SPLASH_BG} from '../../../images';
import {Styles} from '../../../styles';
import {TernAndConditionButton} from '../../../components/authornication/TermAndConditionButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SperateOr} from '../../../components/authornication/SperateOr';
import {FacebookLoginButton} from '../../../components/authornication/FacebookLoginButton';
import {SignUpForm} from '../../../components/authornication/SignupForm';

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
  keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{backgroundColor: Colors.colorPrimary}}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={this.keyboardVerticalOffset}
          style={{
            flex: 1,
          }}>
          <Container style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
              <ImageBackground
                source={SPLASH_BG}
                style={Styles.fullScreenStatic}
              />
              {this.renderTopSocial()}
              <SignUpForm signUpPressed={() => {}} />
            </SafeAreaView>
          </Container>
        </KeyboardAvoidingView>
        <TernAndConditionButton
          isAbsolute={false}
          label={'T & C Privacy Policy'}
        />
      </ScrollView>
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
