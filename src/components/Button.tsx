import React from 'react';
import {Button as ButtonComponent, RnViewStyleProp} from 'native-base';
import {Label} from './Label';
import {StyleSheet} from 'react-native';

interface ButtonProps {
  backgroundColor: string;
  label: string;
  onPress: () => void;
  labelColor?: string;
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonComponent rounded style={styles(props).core} onPress={props.onPress}>
      <Label
        style={{
          color: props.labelColor ? props.labelColor : 'white',
          textAlign: 'center',
          alignSelf: 'center',
        }}
        text={props.label}
      />
    </ButtonComponent>
  );
};

const styles = (props: ButtonProps) =>
  StyleSheet.create({
    core: {
      height: 60,
      width: '100%',
      backgroundColor: props.backgroundColor,
      alignSelf: 'center',
      marginTop: 16,
      justifyContent: 'center',
    },
  });
