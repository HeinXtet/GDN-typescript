import React, {useState, LegacyRef} from 'react';
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

interface InputProps {
  placeholder: string;
  returnKeyType?: ReturnKeyType;
  onChange: (text: String) => void;
  isSecureEntry?: boolean;
  keyboardType?: KeyboardType;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const Input = React.forwardRef(
  (props: InputProps, ref: LegacyRef<TextInput>) => {
    const [isFocus, setFocus] = useState(false);

    const [text, setText] = useState('');

    return (
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
          onBlur={() => setFocus(false)}
          placeholderTextColor={'white'}
          style={{
            ...appFont,
            width: '100%',
            paddingLeft: 8,
            paddingEnd: 8,
            color: 'white',
          }}
          onChangeText={text => {
            setText(text);
            props.onChange(text);
          }}
        />
      </Item>
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
