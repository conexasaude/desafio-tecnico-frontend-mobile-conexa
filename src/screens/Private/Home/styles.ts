import styled, { css } from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  gap: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const SeeMore = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_GRAY};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
