import styled, { css } from '@emotion/native'

import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY};
    border: 1px solid ${theme.COLORS.PHILIPINE_GRAY};
  `};
`
export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 16px;
  `};
`
