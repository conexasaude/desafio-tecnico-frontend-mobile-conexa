import {Container} from '@components/container/view';
import {Header} from '@components/header';
import BackIconSVG from '@assets/chevron-left.svg';
import {
  Card,
  Divider,
  Field,
  FieldBold,
  Icon,
  Title,
  styleSheet,
} from './styles';
import {useAppointmentViewModel} from './view-model';

export function Appointment() {
  const {appointment, handleGoBack} = useAppointmentViewModel();

  return (
    <Container>
      <Header.Root>
        <Header.VStack>
          <Header.Title>Detalhes</Header.Title>
          <Header.HStack style={styleSheet.HStack}>
            <Header.Button
              title="Voltar"
              leftElement={<BackIconSVG />}
              onPress={handleGoBack}
            />
            <Icon source={require('@assets/logo-icon-conexa.png')} />
          </Header.HStack>
        </Header.VStack>
      </Header.Root>

      {appointment?.id && (
        <Card>
          <Title>Dados do Paciente</Title>

          <Field>
            <FieldBold>Data da consulta: </FieldBold>
            {appointment.dataConsulta.split(' ')[0].replaceAll('-', '/')}
          </Field>
          <Field>
            <FieldBold>Hora da consulta: </FieldBold>
            {appointment.dataConsulta.split(' ')[1]}
          </Field>
          <Field>
            <FieldBold>Paciente: </FieldBold>
            {appointment.paciente}
          </Field>
          <Field>
            <FieldBold>Observações: </FieldBold>
            {appointment.observacao}
          </Field>

          <Divider />

          <Title>Dados do Profissional</Title>

          <Field>
            <FieldBold>Médico: </FieldBold>
            {appointment.medico.nome}
          </Field>
          {appointment.medico?.email && (
            <Field>
              <FieldBold>Contato: </FieldBold>
              {appointment.medico.email}
            </Field>
          )}
        </Card>
      )}
    </Container>
  );
}
