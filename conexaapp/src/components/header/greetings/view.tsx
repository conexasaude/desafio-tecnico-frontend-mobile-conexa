import {TextProps} from 'react-native';
import {Container, TextBold} from './styles';

export function Greetings({children, ...rest}: TextProps) {
  return (
    <Container {...rest}>
      <TextBold {...rest}>Olá </TextBold>
      {children}
    </Container>
  );
}
