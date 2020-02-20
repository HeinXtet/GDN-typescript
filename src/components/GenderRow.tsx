import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from './Container';
import {Label} from './Label';
import {margin16} from '../styles';
interface GenderRowProps {
  isSelected: boolean;
  text: string;
  onChange: (gender: number) => void;
  gender: number;
}

export const GenderRow = (props: GenderRowProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.onChange(props.gender)}
      style={[
        styles.core,
        props.isSelected ? {borderColor: 'white'} : {borderColor: 'gray'},
      ]}>
      <Container style={styles.coreContainer}>
        <Label text={props.text} style={styles.coreLb} />
        {props.isSelected ? (
          <Icon
            size={24}
            style={{marginEnd: margin16}}
            color={'white'}
            name="check"
          />
        ) : null}
      </Container>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  core: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 8,
    marginStart: 8,
    marginEnd: 8,
    justifyContent: 'space-between',
  },
  coreLb: {
    paddingStart: margin16,
    flex: 1,
    alignSelf: 'center',
    color: 'white',
  },
  coreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
