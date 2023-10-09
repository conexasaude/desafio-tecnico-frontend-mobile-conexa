import React, { forwardRef } from 'react'

import { TextInput as RNTextInput, TextInputProps } from 'react-native'
import {
  Container,
  Label,
  TextInput,
  Error,
  ContainerRow,
  Icon,
} from './styles'
import { useTheme } from '@emotion/react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface InputProps extends TextInputProps {
  label: string
  error?: string
  icon?: string
  onPressIcon?: () => void
}
export const Input = forwardRef<RNTextInput, InputProps>(
  ({ label, error, icon, onPressIcon, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <Container>
        <Label error={!!error}>{label}</Label>

        <ContainerRow>
          <TextInput
            ref={ref}
            placeholderTextColor={COLORS.PHILIPINE_GRAY}
            error={!!error}
            {...rest}
          />

          {icon && (
            <Icon>
              <MaterialCommunityIcons
                name={icon}
                onPress={onPressIcon}
                size={24}
              />
            </Icon>
          )}
        </ContainerRow>

        {error && <Error>{error}</Error>}
      </Container>
    )
  },
)

Input.displayName = 'Input'
