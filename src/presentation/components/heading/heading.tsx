import React from 'react';

// Styles
import { StyledText } from './styles';

// Types
import { HeadingInterface } from './types';

export function Heading({ children, type, style }: HeadingInterface) {
  return (
    <StyledText type={type} style={style}>
      {children}
    </StyledText>
  );
}
