import React from 'react';
import {Container, Button, View} from 'native-base';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationScreenProp} from 'react-navigation';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Styles, Colors} from '../../../styles/index';
import {SPLASH_BG, LOGO_WHITE} from '../../../images/index';
import {LoginForm} from './components/LoginForm';
import {Label} from '../../../components/Label';
import {SperateOr} from './components/SperateOr';
import {TernAndConditionButton} from './components/TermAndConditionButton';
export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
class Login extends React.Component<NavigationProps> {
  renderForm = () => {
    return (
      <LoginForm
        onPressLogin={(email: string, password: string) => {
          console.log('call api to login ' + email + ' ' + password);
        }}
      />
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
          <Container>
            <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
              <ImageBackground
                source={SPLASH_BG}
                style={Styles.fullScreenStatic}
              />
              {this.renderTopLogo()}
              {this.renderFacebookLoginButton()}
              {this.renderViewLine()}
              {this.renderForm()}
              <TernAndConditionButton label={'T & C Privacy Policy'} />
            </SafeAreaView>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  renderFacebookLoginButton = () => {
    return (
      <Button style={styles.facebookLoginStyle}>
        <Label
          style={{color: 'white', flex: 1, paddingLeft: 16}}
          text="Continues with Facebook"
        />
        <Image
          source={require('../../../images/facebook.png')}
          style={{marginEnd: 16}}
        />
      </Button>
    );
  };

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
  facebookLoginStyle: {
    height: 55,
    margin: 16,
    marginTop: 24,
    backgroundColor: Colors.colorFacebook,
  },
});

export default Login;
