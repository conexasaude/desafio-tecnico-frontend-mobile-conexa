import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { CardText, Container } from './styles';
import { ReactNode } from 'react';

interface OptionCardProps {
  text: string
  icon: ReactNode
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  testID: string
}

export default function OptionCard({ text, icon, onPress, testID }: OptionCardProps) {

  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <Container>
        {icon}
        <CardText>{text}</CardText>
      </Container>
    </TouchableOpacity>
  );
}
