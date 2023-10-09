import styled, { css } from '@emotion/native'

import { TextInput as RNTextInput } from 'react-native'

interface ErrorProps {
  error: boolean
}

export const Container = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text<ErrorProps>`
  position: absolute;
  z-index: 1;
  top: -14px;
  left: 16px;
  padding: 4px;

  ${({ theme, error }) => css`
    background-color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${error ? '#FF3333' : '#1800AE'};
  `};
`

export const TextInput = styled(RNTextInput)<ErrorProps>`
  padding: 16px;
  border-radius: 5px;
  font-size: 16px;
  height: 56px;

  ${({ theme, error }) => css`
    color: ${theme.COLORS.BLACK};
    border: ${error ? '1px solid #FF3333' : '1px solid #1800AE'};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Error = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
