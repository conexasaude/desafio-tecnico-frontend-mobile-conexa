import styled, { css } from '@emotion/native'

export const Container = styled.View`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY};
  `};
`

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
