import React from 'react';

// Components
import { ReadonlyInput } from '~/presentation/components/inputs/readonly-input';
import { TextInput } from 'react-native-paper';

// Types
import { TimePickerInputInterface } from './types';

export function TimePickerInput({ value, onPress }: TimePickerInputInterface) {
  return (
    <ReadonlyInput
      value={value}
      label="Horário"
      iconRight={<TextInput.Icon icon="clock" onPress={onPress} />}
    />
  );
}
