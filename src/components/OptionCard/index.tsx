import { GestureResponderEvent, Pressable } from 'react-native';
import { CardText, Container } from './styles';
import { ReactNode } from 'react';

interface OptionCardProps {
    text: string
    icon: ReactNode
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
    testID: string
}

export default function OptionCard({ text, icon, onPress, testID }: OptionCardProps) {

  return (
    <Pressable onPress={onPress} testID={testID}>
      <Container>
        {icon}
        <CardText>{text}</CardText>
      </Container>
    </Pressable>
  );
}
