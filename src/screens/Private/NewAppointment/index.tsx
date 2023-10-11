import { Header } from '@components/layout/Header'
import { Container, Mandatory, Title } from './styles'

export function NewAppointment() {
  return (
    <>
      <Header buttonBack title="Nova consulta" />

      <Container>
        <Title>Preencha as informações da consulta</Title>

        <Mandatory>* Campos obrigatórios</Mandatory>
      </Container>
    </>
  )
}
