import React from 'react';

// Components
import { ReadonlyInput } from '~/presentation/components/inputs/readonly-input';
import { TextInput } from 'react-native-paper';

// Types
import { DatePickerInputInterface } from './types';

export function DatePickerInput({ value }: DatePickerInputInterface) {
  return (
    <ReadonlyInput value={value} label="Data" iconRight={<TextInput.Icon icon="calendar" />} />
  );
}
