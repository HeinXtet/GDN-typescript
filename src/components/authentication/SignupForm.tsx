import React, {useState, useRef} from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import {Container, Input, Button} from '../index';
import {View} from 'react-native-animatable';
import {defaultContainerMargin, margin8, Colors} from '../../styles/index';
import {GenderRow} from '../GenderRow';
import {SignUpRequest} from '../../features/auth/models/request/SignUpRequest';
import {isAllValid} from '../../utils/validation';
interface SignUpFormProps {
  signUpPressed: (request: SignUpRequest) => void;
}
let formValidFileds = {};

export const SignUpForm = (props: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const confirmPasswordRef = useRef<TextInput>();
  const phoneRef = useRef<TextInput>();

  const submitSignUp = () => {
    if (isAllValid(formValidFileds)) {
      console.log('isVaid');
      let gender = 0 ? 'male' : 'female';
      props.signUpPressed({
        email,
        password,
        mem_phone: phoneNumber,
        mem_name: name,
        mem_gender: gender,
        push_notification_token: '',
        device_type: Platform.OS,
      });
    }
  };

  return (
    <Container style={{flex: 1}}>
      <View style={[defaultContainerMargin]}>
        <Input
          validateType="username"
          onSubmitEditing={() => emailRef.current.focus()}
          placeholder="Name"
          returnKeyType="next"
          isValid={isValid => {
            formValidFileds['username'] = isValid;
          }}
          onChange={text => {
            setName(text.toString());
          }}
        />
      </View>
      <View style={styles.genderContainer}>
        <GenderRow
          gender={0}
          onChange={gender => {
            setGender(gender);
          }}
          text="Male"
          isSelected={gender == 0}
        />
        <GenderRow
          gender={1}
          text="Female"
          onChange={gender => setGender(gender)}
          isSelected={gender == 1}
        />
      </View>
      <View style={[defaultContainerMargin]}>
        <Input
          validateType="email"
          ref={emailRef}
          returnKeyType="next"
          isValid={isValid => {
            formValidFileds['email'] = isValid;
          }}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          onChange={text => {
            setEmail(text.toString());
          }}
        />
        <Input
          validateType="password"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          ref={passwordRef}
          placeholder="Password"
          isSecureEntry
          returnKeyType="next"
          isValid={isValid => {
            formValidFileds['password'] = isValid;
          }}
          onChange={text => {
            setPassword(text.toString());
          }}
        />

        <Input
          validateType="password"
          onSubmitEditing={() => phoneRef.current.focus()}
          ref={confirmPasswordRef}
          placeholder="ReType Password"
          isSecureEntry
          returnKeyType="next"
          isValid={isValid => {
            formValidFileds['confirm_password'] = isValid;
          }}
          onChange={text => {
            setConfirmPassword(text.toString());
          }}
        />
        <Input
          validateType="phone"
          ref={phoneRef}
          returnKeyType="done"
          onSubmitEditing={() => alert('api call')}
          placeholder="Phone Number"
          isSecureEntry
          isValid={isValid => {
            formValidFileds['phone'] = isValid;
          }}
          onChange={text => {
            setPhoneNumber(text.toString());
          }}
        />

        <Button
          backgroundColor={Colors.colorPrimary}
          label="SignUp"
          onPress={() => {
            submitSignUp();
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  core: {},
  genderContainer: {
    marginStart: 8,
    marginEnd: 8,
    flexDirection: 'row',
    marginTop: margin8,
  },
});
