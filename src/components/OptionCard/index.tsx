import { GestureResponderEvent, Pressable } from 'react-native';
import { CardText, Container } from './styles';
import { ReactNode } from 'react';

interface OptionCardProps {
    text: string
    icon: ReactNode
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

export default function OptionCard({ text, icon, onPress }: OptionCardProps) {

  return (
    <Pressable onPress={onPress}>
      <Container>
        {icon}
        <CardText>{text}</CardText>
      </Container>
    </Pressable>
  );
}
