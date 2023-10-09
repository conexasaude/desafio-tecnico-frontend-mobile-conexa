import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { Input } from '@components/Input'
import { useState } from 'react'

interface PasswordFormProps extends TextInputProps {
  control: Control
  name: string
  label: string
  error?: string
}

export function PasswordForm({
  control,
  name,
  label,
  error,
  ...rest
}: PasswordFormProps) {
  const [isSecurityEntry, setIsSecurityEntry] = useState(true)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          label={label}
          error={error}
          secureTextEntry={isSecurityEntry}
          onPressIcon={() =>
            setIsSecurityEntry((previousState) => !previousState)
          }
          icon={isSecurityEntry ? 'eye-off' : 'eye'}
          {...rest}
        />
      )}
    />
  )
}
