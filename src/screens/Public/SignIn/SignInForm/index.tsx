import { Button } from '@components/Button'
import { ContainerForm } from '@components/Form/ContainerForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SignInFormValues, userSchema } from '@schemas/userSchema'
import { InputForm } from '@components/Form/InputForm'
import { PasswordForm } from '@components/Form/PasswordForm'

interface SignInFormProps {
  onSubmit: (formValues: SignInFormValues) => void
  loading: boolean
}

export function SignInForm({ onSubmit, loading }: SignInFormProps) {
  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  })

  return (
    <ContainerForm>
      <InputForm
        control={control}
        error={errors.email?.message}
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
        error={errors.password?.message}
        autoCapitalize="none"
        name="password"
        label="Senha"
        placeholder="********"
        returnKeyType="send"
      />

      <Button
        title="Entrar"
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      />
    </ContainerForm>
  )
}
