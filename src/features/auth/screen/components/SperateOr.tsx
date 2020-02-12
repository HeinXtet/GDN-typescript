import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Label} from '../../../../components/Label';

export const SperateOr = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.coreView} />
      <Label text="OR" style={styles.coreLabel} />
      <View style={styles.coreView} />
    </View>
  );
};

const styles = StyleSheet.create({
  coreView: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
    margin: 16,
  },
  coreLabel: {
    color: 'white',
    marginTop: 4,
  },
});
