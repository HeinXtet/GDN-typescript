import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Button as Btn, View, TouchableOpacity} from 'react-native';
import {Container, Label} from '../components';
import {Colors} from '../styles';

interface MessageModalProps {
  title?: string;
  message: string;
  isVisible: boolean;
  isOnlyPositiveButton: boolean;
  positiveButtonTitle: string;
  isCenterButton?: boolean;
  negativeButtonTitle?: string;
  positiveButtonCallback: () => void;
  negativeButtonCallback?: () => void;
}

interface ButtonProps {
  text: string;
  callback: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        marginStart: 8,
        alignSelf: 'flex-end',
        padding: 8,
      }}
      onPress={props.callback}>
      <Label isHeading text={props.text} />
    </TouchableOpacity>
  );
};

export const MessageModal = (props: MessageModalProps) => {
  console.log(JSON.stringify(props));
  return (
    <Modal
      animationIn="slideInUp"
      hasBackdrop
      onBackButtonPress={props.positiveButtonCallback}
      isVisible={props.isVisible}>
      {DefaultModalContent(props)}
    </Modal>
  );
};

const DefaultModalContent = (props: MessageModalProps) => (
  <View style={styles.content}>
    {props.title ? (
      <Label style={styles.contentTitle} text={props.title} />
    ) : null}

    <Label style={styles.messageCore} isHeading={false} text={props.message} />

    {props.isCenterButton ? (
      <TouchableOpacity
        style={{
          marginStart: 8,
          marginTop: 8,
          alignSelf: 'center',
          padding: 8,
        }}
        onPress={props.positiveButtonCallback}>
        <Label isHeading text={'CLOSE'} style={{color: Colors.colorPrimary}} />
      </TouchableOpacity>
    ) : props.isOnlyPositiveButton ? (
      <Button
        text={props.positiveButtonTitle}
        callback={props.positiveButtonCallback}
      />
    ) : (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
        <Button
          text={props.negativeButtonTitle}
          callback={props.negativeButtonCallback}
        />
        <Button
          text={props.positiveButtonTitle}
          callback={props.positiveButtonCallback}
        />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  core: {
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  titleCore: {
    padding: 8,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 8,
    textAlign: 'left',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  messageCore: {
    textAlign: 'left',
    paddingTop: 8,
    fontSize: 18,
  },
});
