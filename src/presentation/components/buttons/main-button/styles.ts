import styled, { css } from 'styled-components/native';

// Componentes
import { Heading } from '~/presentation/components/heading';

// Types
import { StyledWhiteHeadingInterface } from './types';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ theme, disabled }) => {
    return css`
      margin-top: ${theme.metrics.doubleSpace}px;
      width: ${theme.metrics.mainButtonWidth}px;
      height: ${theme.metrics.mainButtonHeight}px;
      border-radius: ${theme.metrics.borderRadius}px;
      justify-content: center;
      align-items: center;
      background-color: ${disabled ? theme.colors.disabledButton : theme.colors.primary};
    `;
  }};
`;

export const WhiteHeading = styled(Heading)`
  ${({ theme, disabled }: StyledWhiteHeadingInterface) => {
    return css`
      color: ${disabled ? theme.colors.disabledButtonText : theme.colors.white};
    `;
  }};
`;
