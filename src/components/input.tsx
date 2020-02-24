import React, {useState, LegacyRef, useEffect} from 'react';
import {Item} from 'native-base';
import {
  StyleSheet,
  ReturnKeyType,
  KeyboardType,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextInput,
} from 'react-native';
import {appFont} from '../styles';
import {Label} from './Label';
import {Container} from './Container';
import validateInput from '../utils/validation';

interface InputProps {
  placeholder: string;
  returnKeyType?: ReturnKeyType;
  onChange: (text: String) => void;
  isSecureEntry?: boolean;
  keyboardType?: KeyboardType;
  errorMessage?: string;
  validateType?: string;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  isValid?: (valid: boolean) => void;
}

export const Input = React.forwardRef(
  (props: InputProps, ref: LegacyRef<TextInput>) => {
    const [isFocus, setFocus] = useState(false);
    const [error, setError] = useState(null);
    const [text, setText] = useState('');

    useEffect(() => {}, [text]);

    return (
      <Container>
        <Item
          rounded
          style={[
            styles.core,
            {
              borderColor: !isFocus && text.length == 0 ? 'gray' : 'white',
              borderWidth: 1,
              paddingStart: 8,
            },
          ]}>
          <TextInput
            ref={ref}
            onSubmitEditing={props.onSubmitEditing}
            returnKeyType={props.returnKeyType}
            keyboardType={props.keyboardType}
            secureTextEntry={props.isSecureEntry}
            placeholder={props.placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              let isValid = validateInput(props.validateType, text);
              setError(isValid);
              props.isValid(isValid == null);
              setFocus(false);
            }}
            placeholderTextColor={'white'}
            style={{
              ...appFont,
              width: '100%',
              paddingLeft: 8,
              paddingEnd: 8,
              color: 'white',
            }}
            onChangeText={changedText => {
              setText(changedText);
              let isValid = validateInput(props.validateType, changedText);
              setError(isValid);
              console.log('inValid ' + isValid == null);
              props.onChange(changedText);
              props.isValid(isValid == null);
            }}
          />
        </Item>
        {error ? (
          <Label
            text={validateInput(props.validateType, text)}
            style={{color: 'red', paddingStart: 8, paddingTop: 4}}
          />
        ) : null}
      </Container>
    );
  },
);

const styles = StyleSheet.create({
  core: {
    alignSelf: 'center',
    marginTop: 16,
    height: 60,
  },
});
