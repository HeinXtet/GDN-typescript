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
import {LoginForm} from '../../../components/authornication/LoginForm';
import {SperateOr} from '../../../components/authornication/SperateOr';
import {FacebookLoginButton} from '../../../components/authornication/FacebookLoginButton';
import {TernAndConditionButton} from '../../../components/authornication/TermAndConditionButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
class Login extends React.Component<NavigationProps> {
  renderForm = () => {
    return (
      <LoginForm
        navigationProps={this.props.navigation}
        onPressLogin={(email: string, password: string) => {
          console.log('call api to login ' + email + ' ' + password);
        }}
      />
    );
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{backgroundColor: Colors.colorPrimary}}
        overScrollMode="never">
        <Container>
          <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />

          <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            {this.renderTopLogo()}
            <FacebookLoginButton
              callback={token => console.log('token ' + token)}
            />
            {this.renderViewLine()}
            {this.renderForm()}
            <TernAndConditionButton isAbsolute label={'T & C Privacy Policy'} />
          </SafeAreaView>
        </Container>
      </KeyboardAwareScrollView>
    );
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

export default Login;
