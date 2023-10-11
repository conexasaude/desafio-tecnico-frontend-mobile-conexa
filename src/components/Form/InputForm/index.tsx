import { TextInputProps } from 'react-native'

import { Control, Controller } from 'react-hook-form'

import { Input } from '@components/Input'

interface InputFormProps extends TextInputProps {
  control: Control
  name: string
  label: string
  error?: string
}

export function InputForm({
  control,
  name,
  label,
  error,
  ...rest
}: InputFormProps) {
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
          {...rest}
        />
      )}
    />
  )
}
