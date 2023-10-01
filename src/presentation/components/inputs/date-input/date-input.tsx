import React from 'react';

import { DatePickerInput } from 'react-native-paper-dates';

// Styles
import { InputContainer } from '../text-input/styles';

// Types
import { DateInputInterface } from './types';

export function DateInput({ locale, label, value, onBlur, onChange }: DateInputInterface) {
  return (
    <InputContainer>
      <DatePickerInput
        locale={locale}
        label={label}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        inputMode="start"
      />
    </InputContainer>
  );
}
