import React from 'react';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {Label} from '../../../../components/Label';
import {Colors} from '../../../../styles';
interface FbLoginButtonProps {
  isCircle?: boolean;
  callback: (token: string) => void;
}

const dispatchFacebookLogin = (props: FbLoginButtonProps) => {
  LoginManager.logInWithPermissions(['public_profile']).then(
    function(result) {
      if (result.isCancelled) {
        console.log('Login cancelled');
        AccessToken.getCurrentAccessToken().then(data => {
          console.log(data);
          if (data.accessToken) {
            console.log('accesstoken ' + data.accessToken);
            props.callback(data.accessToken);
          }
        });
      } else {
        console.log(
          'Login success with permissions: ' +
            result.grantedPermissions.toString(),
        );
      }
    },
    function(error) {
      console.log('Login fail with error: ' + error);
    },
  );
};

export const FacebookLoginButton = (props: FbLoginButtonProps) => {
  return props.isCircle
    ? renderCircleFbLogin(props)
    : renderFacebookLoginButton(props);
};

const renderCircleFbLogin = (props: FbLoginButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => dispatchFacebookLogin(props)}
      style={{marginTop: 16, marginBottom: 16}}>
      <Image
        source={require('../../../../images/facebook_circle.png')}
        style={styles.ivFacebook}
      />
    </TouchableOpacity>
  );
};

const renderFacebookLoginButton = (props: FbLoginButtonProps) => {
  return (
    <Button
      style={styles.facebookLoginStyle}
      onPress={() => dispatchFacebookLogin(props)}>
      <Label
        style={{color: 'white', flex: 1, paddingLeft: 16}}
        text="Continues with Facebook"
      />
      <Image
        source={require('../../../../../src/images/facebook.png')}
        style={{marginEnd: 16}}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  facebookLoginStyle: {
    height: 55,
    margin: 16,
    marginTop: 24,
    backgroundColor: Colors.colorFacebook,
  },
  ivFacebook: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
});
