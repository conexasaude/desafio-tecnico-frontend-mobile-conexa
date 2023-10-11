import styled, { css } from '@emotion/native'

export const Container = styled.View`
  border-radius: 8px;
  width: 100%;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`
