import styled, { css } from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `};
`
