import { Noop } from 'react-hook-form';

export interface DateInputInterface {
  locale: string;
  label: string;
  value: Date | undefined;
  onBlur: Noop;
  onChange(date: Date | undefined): void;
}
