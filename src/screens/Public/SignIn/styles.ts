import styled, { css } from '@emotion/native'

export const Container = styled.View`
  padding: 16px;
  flex: 1;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY};
  `};
`

export const Slogan = styled.Text`
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  margin: 16px 0;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
