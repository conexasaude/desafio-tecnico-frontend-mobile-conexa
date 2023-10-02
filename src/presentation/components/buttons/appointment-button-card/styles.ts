import styled, { css } from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ theme }) => {
    return css`
      padding: ${theme.metrics.tripleSpace}px;
      border-radius: ${theme.metrics.borderRadius}px;
      justify-content: center;
      background-color: ${theme.colors.white};
    `;
  }};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
