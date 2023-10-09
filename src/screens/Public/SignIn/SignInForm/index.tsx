import { Button } from '@components/Button'
import { ContainerForm } from '@components/Form/ContainerForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { userSchema } from '@schemas/userSchema'
import { InputForm } from '@components/Form/InputForm'

export function SignInForm() {
  const {
    control,
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
        name="email"
        label="E-mail"
        placeholder="email@exemplo.com.br"
      />

      <InputForm
        control={control}
        error={
          errors.password?.message ? errors.password.message.toString() : ''
        }
        name="password"
        label="Senha"
        placeholder="********"
      />

      <Button title="Entrar" />
    </ContainerForm>
  )
}
