import React from 'react';

import {
    Text,
    TextStyle,
    StyleSheet,
} from 'react-native';
import {
    AppTextStyle
} from '../styles/index'
interface LabelProps {
    text: String,
    center?: Boolean,
    style?: TextStyle,
    styles?: [TextStyle],
    isHeading?: boolean,
    lineCount?: number,
}

export const Label = ({
    text,
    style,
    center,
    styles,
    isHeading,
    lineCount
}: LabelProps) => {
    return <Text
        numberOfLines={lineCount ? lineCount : null}
        ellipsizeMode={'tail'}
        style={[isHeading ? AppTextStyle.headingText : AppTextStyle.baseText,
        defaultStyles.core,
             center ? { textAlign: 'center' } : null, styles,style]}>
        {text}
    </Text>
}

const defaultStyles = StyleSheet.create({
    core: {
        color: 'black',
    }
})