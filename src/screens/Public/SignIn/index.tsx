import { Container, Slogan } from './styles'
import { SignInForm } from './SignInForm'
import { Card } from '@components/Card'

import Logo from '@assets/images/logo.svg'

export function SignIn() {
  return (
    <Container>
      <Logo />

      <Slogan>
        Entre em sua conta para agendar, listar e detalhar consultas.
      </Slogan>

      <Card>
        <SignInForm />
      </Card>
    </Container>
  )
}
