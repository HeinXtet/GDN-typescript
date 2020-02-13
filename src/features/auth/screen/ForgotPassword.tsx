import React from 'react';
import {Container, Label, Button, Input} from '../../../components';
import {ImageBackground, StyleSheet} from 'react-native';
import {SPLASH_BG} from '../../../images';
import {Styles, Colors} from '../../../styles';

class ForgotPassword extends React.Component {
  email = '';

  render() {
    return (
      <Container>
        <ImageBackground source={SPLASH_BG} style={Styles.fullScreenStatic} />
        <Label
          style={styles.labelInfo}
          text="Enter your email to reset password.After send reset link has been sent your email"
        />
        <Container style={{marginStart: 16, marginEnd: 16}}>
          <Input
            placeholder="Email"
            onChange={text => (this.email = text.toString())}
          />

          <Button
            style={{marginTop: 24}}
            onPress={() => {
              console.log('email ' + this.email);
            }}
            backgroundColor={Colors.colorPrimary}
            label="SEND"
          />
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  labelInfo: {
    color: 'white',
    padding: 28,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default ForgotPassword;
