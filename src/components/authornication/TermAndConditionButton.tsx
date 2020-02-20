import React from 'react';
import {Button} from 'native-base';
import {Label} from '../Label';

interface TermProps {
  label: string;
  isAbsolute?: boolean;
}

export const TernAndConditionButton = (props: TermProps) => {
  return (
    <Button
      style={{
        position: props.isAbsolute ? 'absolute' : null,
        bottom: props.isAbsolute ? 24 : null,
        alignSelf: 'center',
        backgroundColor: 'transparent',
      }}>
      <Label style={{color: 'white'}} text={props.label} />
    </Button>
  );
};
