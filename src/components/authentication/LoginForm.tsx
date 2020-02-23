import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import {Input, Container} from '..';
import {Button} from '../Button';
import {Label} from '../Label';
import {Colors} from '../../styles';
import {NavigationStackProp} from 'react-navigation-stack';
interface LoginFormProps {
  onPressLogin: (email: string, password: string) => void;
  navigationProps: NavigationStackProp;
}

export const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('deevvdd@gmail.com');
  const [password, setPassword] = useState('123456');

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
  var passwordRef = React.createRef<TextInput>();

  return (
    <Container style={{paddingBottom: 24}}>
      <View style={{marginLeft: 16, marginEnd: 16}}>
        <Input
          returnKeyType={'next'}
          onChange={email => setEmail(email.toString())}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          placeholder={'Email'}
        />

        <Input
          ref={passwordRef}
          returnKeyType={'done'}
          onChange={pass => setPassword(pass.toString())}
          onSubmitEditing={() => {
            //api call
          }}
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 16,
          marginEnd: 16,
          marginBottom: 24,
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