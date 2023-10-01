import React from 'react';

// Components
import { HelperText } from 'react-native-paper';

// Styles
import { HelperTextContainer } from './styles';

// Types
import { InputErrorMessageInterface } from './types';

export function InputErrorMessage({ errorMessage, isVisible }: InputErrorMessageInterface) {
  return (
    <HelperTextContainer>
      <HelperText type="error" visible={isVisible}>
        {errorMessage}
      </HelperText>
    </HelperTextContainer>
  );
}
