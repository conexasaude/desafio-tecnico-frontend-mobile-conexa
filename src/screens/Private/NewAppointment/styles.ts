import styled, { css } from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `};
`

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Mandatory = styled.Text`
  font-size: 14px;
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_GRAY};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
