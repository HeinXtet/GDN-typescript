import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Input, Button} from '../index';
import {View} from 'react-native-animatable';
import {defaultContainerMargin, margin8, Colors} from '../../styles/index';
import {GenderRow} from '../GenderRow';
interface SignUpFormProps {
  signUpPressed: () => void;
}

export const SignUpForm = (props: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Container style={{flex: 1}}>
      <View style={[defaultContainerMargin]}>
        <Input
          placeholder="Name"
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
          placeholder="Email"
          onChange={text => {
            setEmail(text.toString());
          }}
        />
        <Input
          placeholder="Password"
          isSecureEntry
          onChange={text => {
            setPassword(text.toString());
          }}
        />

        <Input
          placeholder="ReType Password"
          isSecureEntry
          onChange={text => {
            setConfirmPassword(text.toString());
          }}
        />
        <Input
          placeholder="Phone Number"
          isSecureEntry
          onChange={text => {
            setPhoneNumber(text.toString());
          }}
        />

        <Button
          backgroundColor={Colors.colorPrimary}
          label="SignUp"
          onPress={() => {
            // if (isValid()) {
            //   props.onPressLogin(email, password);
            //   console.log('email ' + email + 'password ' + password);
            // }
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
