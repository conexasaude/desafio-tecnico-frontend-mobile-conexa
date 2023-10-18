import {ViewProps} from 'react-native';
import {Container} from './styles';

export function VStack({children, ...rest}: ViewProps) {
  return <Container {...rest}>{children}</Container>;
}
