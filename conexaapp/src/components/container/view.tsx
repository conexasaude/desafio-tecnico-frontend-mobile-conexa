import {ViewProps} from 'react-native';
import {View, SafeContainer} from './styles';

export function Container({children, ...rest}: ViewProps) {
  return (
    <View {...rest}>
      <SafeContainer {...rest}>{children}</SafeContainer>
    </View>
  );
}
