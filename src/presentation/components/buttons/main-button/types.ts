import { DefaultTheme } from 'styled-components';

export interface MainButtonInterface {
  buttonText: string;
  isDisabled?: boolean;
  isLoading: boolean;
  onPress(): void;
}

export interface StyledWhiteHeadingInterface {
  theme: DefaultTheme;
  disabled: boolean;
}
