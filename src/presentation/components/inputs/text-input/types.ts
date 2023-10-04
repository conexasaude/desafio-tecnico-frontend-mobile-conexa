import { Noop } from 'react-hook-form';

export interface TextInputInterface {
  label: string;
  value: string;
  hideText?: boolean;
  onBlur: Noop;
  onChangeText?: (text: string) => void;
  onPressIn?: () => void;
}
