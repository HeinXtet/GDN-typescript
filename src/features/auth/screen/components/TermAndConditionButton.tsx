import React from 'react';
import {Button} from 'native-base';
import {Label} from '../../../../components/Label';

interface TermProps {
  label: string;
}

export const TernAndConditionButton = (props: TermProps) => {
  return (
    <Button
      style={{
        position: 'absolute',
        bottom: 24,
        alignSelf: 'center',
        backgroundColor: 'transparent',
      }}>
      <Label style={{color: 'white'}} text={props.label} />
    </Button>
  );
};
