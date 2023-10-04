import React from 'react';

// Components
import { TextInput as PaperTextInput } from 'react-native-paper';

// Styles
import { InputContainer } from './styles';

// Types
import { ReadonlyInputInterface } from './types';

export function ReadonlyInput({ label, value, iconRight }: ReadonlyInputInterface) {
  return (
    <InputContainer>
      <PaperTextInput mode="flat" label={label} value={value} editable={false} right={iconRight} />
    </InputContainer>
  );
}
