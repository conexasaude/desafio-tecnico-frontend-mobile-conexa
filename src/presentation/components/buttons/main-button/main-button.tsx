import React from 'react';

// Components
import { ActivityIndicator } from 'react-native';

// Styles
import { StyledTouchableOpacity, WhiteHeading } from './styles';
import { useTheme } from 'styled-components';

// Types
import { MainButtonInterface } from './types';

export function MainButton({
  buttonText,
  isLoading = false,
  isDisabled = false,
  onPress,
}: MainButtonInterface) {
  const theme = useTheme();
  function renderButtonContent() {
    if (isLoading) {
      return <ActivityIndicator size="small" color={theme.colors.white} />;
    }

    return (
      <WhiteHeading type="H1" disabled={isDisabled}>
        {buttonText}
      </WhiteHeading>
    );
  }
  return (
    <StyledTouchableOpacity onPress={onPress} disabled={isDisabled}>
      {renderButtonContent()}
    </StyledTouchableOpacity>
  );
}
