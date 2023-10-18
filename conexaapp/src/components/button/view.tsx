import React from 'react';
import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
}
export function Button({title, onPress, variant = 'solid', ...rest}: Props) {
  return (
    <Container onPress={onPress} variant={variant} {...rest}>
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
