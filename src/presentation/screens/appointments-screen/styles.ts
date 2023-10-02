import styled, { css } from 'styled-components/native';

export const AppointmentsButtonCardContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.metrics.tripleSpace}px;
    `;
  }};
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  height: 200px;
`;
