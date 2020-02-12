import React, {useState} from 'react';
import {Item, Input as TextInput} from 'native-base';
import {StyleSheet} from 'react-native';

interface InputProps {
  placeholder: string;
  onChange: (text: String) => void;
  isSecureEntry?: boolean;
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
        secureTextEntry={props.isSecureEntry}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor={'white'}
        style={{color: 'white'}}
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
