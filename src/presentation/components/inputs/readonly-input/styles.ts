import styled, { css } from 'styled-components/native';

export const InputContainer = styled.View`
  ${({ theme }) => {
    return css`
      height: ${theme.metrics.inputHeight}px;
      width: ${theme.metrics.inputWidth}px;
      margin-bottom: ${theme.metrics.tripleSpace}px;
    `;
  }};
`;
