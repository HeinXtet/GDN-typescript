import React from 'react';
import {Label} from '../Label';
import {TouchableOpacity} from 'react-native';

interface TermProps {
  label: string;
  isAbsolute?: boolean;
}

export const TernAndConditionButton = (props: TermProps) => {
  return (
    <TouchableOpacity
      style={{
        paddingTop: 16,
        paddingBottom: 16,
        position: props.isAbsolute ? 'absolute' : null,
        bottom: props.isAbsolute ? 8 : null,
        alignSelf: 'center',
        backgroundColor: 'transparent',
      }}>
      <Label style={{color: 'white'}} text={props.label} />
    </TouchableOpacity>
  );
};
