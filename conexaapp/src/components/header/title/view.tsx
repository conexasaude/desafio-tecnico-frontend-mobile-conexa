import {TextProps} from 'react-native';
import {Container} from './styles';

export function Title({children, ...rest}: TextProps) {
  return <Container {...rest}>{children}</Container>;
}
