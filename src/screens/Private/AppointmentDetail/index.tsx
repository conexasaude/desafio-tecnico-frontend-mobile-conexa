import { Header } from '@components/layout/Header'
import { Container, Subtitle, Title } from './styles'

export function AppointmentDetail() {
  return (
    <>
      <Header buttonBack title="Detalhes da consulta" />

      <Container>
        <Title>Nome do paciente: </Title>
        <Subtitle>Diego Senna</Subtitle>

        <Title>Data da consulta: </Title>
        <Subtitle>24/05/2002 12:00:00</Subtitle>

        <Title>Observação: </Title>
        <Subtitle>Teste observação</Subtitle>
      </Container>
    </>
  )
}
