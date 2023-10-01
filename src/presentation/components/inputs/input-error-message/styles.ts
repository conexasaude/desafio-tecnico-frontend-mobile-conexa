import styled, { css } from 'styled-components/native';

export const HelperTextContainer = styled.View`
  ${({ theme }) => {
    return css`
      align-self: flex-start;
      margin-left: ${theme.metrics.space}px;
      margin-top: ${-theme.metrics.doubleSpace}px;
    `;
  }};
`;
