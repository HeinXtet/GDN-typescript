import React from 'react';

import {Text, TextStyle, StyleSheet} from 'react-native';
import {AppTextStyle} from '../styles/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface LabelProps {
  text: String;
  center?: Boolean;
  style?: TextStyle;
  styles?: [TextStyle];
  isHeading?: boolean;
  lineCount?: number;
  touchable?: boolean;
  onPress?: () => void;
}

export const Label = (props: LabelProps) => {
  return props.touchable
    ? renderTouchableLabel(props)
    : renderLabelComponent(props);
};

const renderTouchableLabel = (props: LabelProps) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.coreTouch, props.style]}
      onPress={props.onPress}>
      {renderLabelComponent(props)}
    </TouchableOpacity>
  );
};

const renderLabelComponent = (props: LabelProps) => {
  return (
    <Text
      numberOfLines={props.lineCount ? props.lineCount : null}
      ellipsizeMode={'tail'}
      style={[
        props.isHeading ? AppTextStyle.headingText : AppTextStyle.baseText,
        defaultStyles.core,
        props.center ? {textAlign: 'center'} : null,
        props.styles,
        props.style,
      ]}>
      {props.text}
    </Text>
  );
};

const defaultStyles = StyleSheet.create({
  core: {
    color: 'black',
  },
  coreTouch: {
    justifyContent: 'center',
  },
});
