import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import {Input, Container} from '..';
import {Button} from '../Button';
import {Label} from '../Label';
import {Colors} from '../../styles';
import {NavigationStackProp} from 'react-navigation-stack';
import {isAllValid} from '../../utils/validation';
interface LoginFormProps {
  onPressLogin: (email: string, password: string) => void;
  navigationProps: NavigationStackProp;
}
let formValidFileds = {};

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

  const submitLogin = () => {
    if (isAllValid(formValidFileds)) {
      console.log('isVaid');
    } else {
      console.log('not valid');
    }
  };

  return (
    <Container style={{paddingBottom: 24}}>
      <View style={{marginLeft: 16, marginEnd: 16}}>
        <Input
          returnKeyType={'next'}
          validateType="email"
          isValid={isValid => {
            console.log('email valid ' + isValid);
            formValidFileds['email'] = isValid;
          }}
          onChange={email => setEmail(email.toString())}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          placeholder={'Email'}
        />

        <Input
          ref={passwordRef}
          returnKeyType={'done'}
          isValid={isValid => {
            formValidFileds['password'] = isValid;
            console.log(
              'password valid ' +
                isValid +
                'map ' +
                JSON.stringify(formValidFileds),
            );
          }}
          validateType="password"
          onChange={pass => setPassword(pass.toString())}
          onSubmitEditing={() => {
            //api call
            submitLogin();
          }}
          placeholder={'Password'}
        />
        <Button
          backgroundColor={Colors.colorPrimary}
          label="Login"
          onPress={() => {
            if (isValid()) {
              submitLogin();

              //props.onPressLogin(email, password);
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
