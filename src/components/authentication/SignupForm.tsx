import React, {useState, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Container, Input, Button} from '../index';
import {View} from 'react-native-animatable';
import {defaultContainerMargin, margin8, Colors} from '../../styles/index';
import {GenderRow} from '../GenderRow';
import {SignUpRequest} from '../../features/auth/models/request/SignUpRequest';
import {isEmpty} from 'lodash';
interface SignUpFormProps {
  signUpPressed: (request: SignUpRequest) => void;
}

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

  const validFormFields = Array();

  return (
    <Container style={{flex: 1}}>
      <View style={[defaultContainerMargin]}>
        <Input
          validateType="username"
          onSubmitEditing={() => emailRef.current.focus()}
          placeholder="Name"
          returnKeyType="next"
          isValid={vaild => {
            validFormFields['username'] = {isValid: vaild};
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
          isValid={vaild => {
            validFormFields['email'] = {isValid: vaild};
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
          isValid={vaild => {
            validFormFields['password'] = {isValid: vaild};
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
          isValid={vaild => {
            validFormFields['password'] = {isValid: vaild};
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
          isValid={vaild => {
            validFormFields['phone'] = {isValid: vaild};
          }}
          onChange={text => {
            setPhoneNumber(text.toString());
          }}
        />

        <Button
          backgroundColor={Colors.colorPrimary}
          label="SignUp"
          onPress={() => {
            let isNotValid = validFormFields.map(value => {
              !value.isValid;
            });
            if (isNotValid.length === 0) {
              alert('all valid');
            }
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
