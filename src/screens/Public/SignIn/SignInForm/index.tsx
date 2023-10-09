import { Button } from '@components/Button'
import { ContainerForm } from '@components/Form/ContainerForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { userSchema } from '@schemas/userSchema'
import { InputForm } from '@components/Form/InputForm'
import { PasswordForm } from '@components/Form/PasswordForm'

interface SignInFormProps {
  onSubmit: () => void
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  })

  return (
    <ContainerForm>
      <InputForm
        control={control}
        error={errors.email?.message ? errors.email.message.toString() : ''}
        onSubmitEditing={() => setFocus('password')}
        keyboardType="email-address"
        autoComplete="email"
        autoCapitalize="none"
        inputMode="email"
        name="email"
        label="E-mail"
        placeholder="email@exemplo.com.br"
        returnKeyType="next"
      />

      <PasswordForm
        control={control}
        error={
          errors.password?.message ? errors.password.message.toString() : ''
        }
        autoCapitalize="none"
        name="password"
        label="Senha"
        placeholder="********"
      />

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </ContainerForm>
  )
}
