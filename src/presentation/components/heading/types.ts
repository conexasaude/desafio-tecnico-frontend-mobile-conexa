import { StyleProp, TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components';

export interface HeadingInterface {
  children: string;
  style?: StyleProp<TextStyle>;
  type: 'H1' | 'H2' | 'H3' | 'H4';
}

export interface StyledTextStylePropsInterface extends HeadingInterface {
  theme: DefaultTheme;
}
