import React from 'react';

// Components
import { TextInput as PaperTextInput } from 'react-native-paper';

// Styles
import { InputContainer } from './styles';

// Types
import { TextInputInterface } from './types';

export function TextInput({
  label,
  value,
  onChangeText,
  onPressIn,
  onBlur,
  hideText = false,
}: TextInputInterface) {
  return (
    <InputContainer>
      <PaperTextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onPressIn={onPressIn}
        secureTextEntry={hideText}
      />
    </InputContainer>
  );
}
