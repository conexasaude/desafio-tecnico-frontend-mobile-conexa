import styled, { css } from '@emotion/native'

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `};
`

export const AppointmentContainer = styled.View`
  padding: 0 16px;
`
