import React, { forwardRef } from 'react'

import { TextInput as RNTextInput, TextInputProps } from 'react-native'
import { Container, Label, TextInput, Error } from './styles'
import { useTheme } from '@emotion/react'

interface InputProps extends TextInputProps {
  label: string
  error?: string
}
export const Input = forwardRef<RNTextInput, InputProps>(
  ({ label, error, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <Container>
        <Label error={!!error}>{label}</Label>

        <TextInput
          ref={ref}
          placeholderTextColor={COLORS.PHILIPINE_GRAY}
          error={!!error}
          {...rest}
        />

        {error && <Error>{error}</Error>}
      </Container>
    )
  },
)

Input.displayName = 'Input'
