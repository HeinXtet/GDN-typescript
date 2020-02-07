import React from 'react';
import {Container} from 'native-base';
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
import {Styles} from '../../../styles/index';
import {SPLASH_BG, LOGO_WHITE} from '../../../images/index';
export interface NavigationProps extends NavigationScreenProp<{}> {
  navigation: NavigationStackProp;
}
class Login extends React.Component<NavigationProps> {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} overScrollMode="never">
        <KeyboardAvoidingView style={{flex: 1}}>
          <Container>
            <SafeAreaView>
              <ImageBackground
                source={SPLASH_BG}
                style={Styles.fullScreenStatic}
              />
              {this.renderTopLogo()}
            </SafeAreaView>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  renderTopLogo = () => {
    return <Image source={LOGO_WHITE} style={styles.logoStyle} />;
  };
}

const styles = StyleSheet.create({
  logoStyle: {
    alignSelf: 'center',
  },
});

export default Login;
