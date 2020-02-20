import React, {useState} from 'react';
import {Item, Input as TextInput} from 'native-base';
import {StyleSheet, ReturnKeyType, KeyboardType} from 'react-native';
import {appFont} from '../styles';

interface InputProps {
  placeholder: string;
  returnKeyType?: ReturnKeyType;
  onChange: (text: String) => void;
  isSecureEntry?: boolean;
  keyboardType?: KeyboardType;
}

export const Input = (props: InputProps) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <Item
      rounded
      style={[
        styles.core,
        {
          borderColor: !isFocus ? 'gray' : 'white',
          borderWidth: 1,
          paddingStart: 8,
        },
      ]}>
      <TextInput
        returnKeyType={props.returnKeyType}
        keyboardType={props.keyboardType}
        secureTextEntry={props.isSecureEntry}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor={'white'}
        style={{...appFont, color: 'white'}}
        onChangeText={props.onChange}
      />
    </Item>
  );
};

const styles = StyleSheet.create({
  core: {
    alignSelf: 'center',
    marginTop: 16,
    height: 60,
  },
});
