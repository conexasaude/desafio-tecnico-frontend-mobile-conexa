import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.View`
  ${({ theme }) => {
    return css`
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-horizontal: ${theme.metrics.screenPaddingHorizontal}px;
    `;
  }};
`;
