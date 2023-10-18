import React from 'react';
import {
  Container,
  DialogButtonContainer,
  DialogContainer,
  DialogMessage,
  DialogMessageContainer,
  DialogTitle,
  DialogTitleContainer,
  ModalContainer,
} from './styles';
import {Button} from '../button/view';

interface Props {
  title: string;
  message: string;
  visible: boolean;
  onRequestClose: () => void;
}

function Dialog({title, message, visible, onRequestClose}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <Container
      animationType="fade"
      transparent
      visible
      onRequestClose={onRequestClose ?? (() => null)}>
      <ModalContainer>
        <DialogContainer>
          <DialogTitleContainer>
            <DialogTitle>{title}</DialogTitle>
          </DialogTitleContainer>

          <DialogMessageContainer>
            <DialogMessage>{message}</DialogMessage>
          </DialogMessageContainer>

          <DialogButtonContainer>
            <Button title="OK" onPress={onRequestClose} />
          </DialogButtonContainer>
        </DialogContainer>
      </ModalContainer>
    </Container>
  );
}

export {Dialog};
