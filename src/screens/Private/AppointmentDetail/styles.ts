import styled, { css } from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  padding: 8px 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `};
`

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_GRAY};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
