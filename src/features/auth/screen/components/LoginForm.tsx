import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Container} from '../../../../components';
import {Button} from '../../../../components/Button';
import {Label} from '../../../../components/Label';
import {Colors} from '../../../../styles';
import {NavigationStackProp} from 'react-navigation-stack';
interface LoginFormProps {
  onPressLogin: (email: string, password: string) => void;
  navigationProps: NavigationStackProp;
}

export const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = (): Boolean => {
    var isValid = true;
    if (email === '') {
      isValid = false;
    }
    if (password === '') {
      isValid = false;
    }
    return isValid;
  };

  return (
    <Container>
      <View style={{marginLeft: 16, marginEnd: 16}}>
        <Input
          onChange={email => setEmail(email.toString())}
          placeholder={'Email'}
        />
        <Input
          onChange={pass => setPassword(pass.toString())}
          placeholder={'Password'}
        />
        <Button
          backgroundColor={Colors.colorPrimary}
          label="Login"
          onPress={() => {
            if (isValid()) {
              props.onPressLogin(email, password);
              console.log('email ' + email + 'password ' + password);
            }
          }}
        />
      </View>

      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 16,
          marginEnd: 16,
        }}>
        <Label
          touchable
          text="Forgot Password"
          onPress={() => {
            props.navigationProps.navigate('ForgotPassword');
          }}
          style={{color: 'white', padding: 8}}
        />
        <Label
          touchable
          text="Sign Up"
          onPress={() => {
            props.navigationProps.navigate('SignUp');
          }}
          style={{color: 'white', padding: 8}}
        />
      </View>
    </Container>
  );
};
