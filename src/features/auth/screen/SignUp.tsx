import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Container, Label} from '../../../components';
import {SPLASH_BG} from '../../../images';
import {Styles} from '../../../styles';
import {TernAndConditionButton} from './components/TermAndConditionButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SperateOr} from './components/SperateOr';
import {FacebookLoginButton} from './components/FacebookLoginButton';

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

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{backgroundColor: Colors.colorPrimary}}
        overScrollMode="never">
        <KeyboardAvoidingView
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

              <TernAndConditionButton label={'T & C Privacy Policy'} />
            </SafeAreaView>
          </Container>
        </KeyboardAvoidingView>
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
