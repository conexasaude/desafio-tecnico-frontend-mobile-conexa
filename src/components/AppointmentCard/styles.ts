import styled, { css } from '@emotion/native'

export const Container = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-style: solid;
  border-left-width: 4px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.NEUTRAL_5O};
    border-color: ${theme.COLORS.PRIMARY};
  `};
`

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Grid = styled.View``

export const Patient = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Date = styled.Text`
  font-size: 14px;
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_GRAY};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Hour = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_500};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const ContainerDateHour = styled.View`
  align-items: center;
  gap: 8px;
`
