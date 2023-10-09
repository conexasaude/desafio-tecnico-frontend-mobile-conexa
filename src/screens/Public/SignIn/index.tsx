import { Container, Slogan } from './styles'
import { SignInForm } from './SignInForm'
import { Card } from '@components/Card'
import { useCallback } from 'react'
import { authenticateUser } from '../../../store/thunks/auth.thunk'
import { useDispatch } from '@hooks/useDispatch'

import Logo from '@assets/images/logo.svg'

export function SignIn() {
  const dispatch = useDispatch()

  const handleSignIn = useCallback(async () => {
    dispatch(
      authenticateUser({
        email: 'diogo.alvesf88@gmail.com',
        password: 'kgb8y2kk',
      }),
    )
  }, [dispatch])

  return (
    <Container>
      <Logo />

      <Slogan>
        Entre em sua conta para agendar, listar e detalhar consultas.
      </Slogan>

      <Card>
        <SignInForm onSubmit={handleSignIn} />
      </Card>
    </Container>
  )
}
