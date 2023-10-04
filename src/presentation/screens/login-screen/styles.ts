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

export const Header = styled.View`
  ${({ theme }) => {
    return css`
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-bottom: ${theme.metrics.tripleSpace}px;
    `;
  }};
`;

export const StyledImage = styled.Image`
  width: 80%;
  height: 100px;
`;
