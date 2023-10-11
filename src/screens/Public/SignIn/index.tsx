import { useCallback } from 'react'

import { Container, Slogan } from './styles'

import { Card } from '@components/Card'
import { Brand } from '@components/layout/Brand'
import { SignInForm } from './SignInForm'

import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { signIn } from '@store/actions/auth.actions'

import { SignInFormValues } from '@schemas/userSchema'

export function SignIn() {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.auth.loading)

  const handleSignIn = useCallback(
    (formValues: SignInFormValues) => {
      dispatch(
        signIn({ email: formValues.email, password: formValues.password }),
      )
    },
    [dispatch],
  )

  return (
    <Container>
      <Brand />

      <Slogan>
        Entre em sua conta para agendar, listar e detalhar consultas.
      </Slogan>

      <Card>
        <SignInForm onSubmit={handleSignIn} loading={loading} />
      </Card>
    </Container>
  )
}
