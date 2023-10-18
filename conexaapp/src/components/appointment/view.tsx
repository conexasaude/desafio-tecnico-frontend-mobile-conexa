import {IAppointment} from '@interfaces/appointment.interface';
import {
  Container,
  DateHour,
  Description,
  DoctorContainer,
  DoctorEmail,
  DoctorName,
  Patient,
  PatientContainer,
  TextBold,
} from './styles';
import {useAppointmentViewModel} from './view-mdoel';

interface Props {
  data: IAppointment;
}

export function Appointment({
  data: {dataConsulta, paciente, observacao, medico, id},
}: Props) {
  const {handlePress} = useAppointmentViewModel();

  return (
    <Container onPress={() => handlePress({id})} activeOpacity={0.5}>
      <PatientContainer>
        <DateHour>
          {`${dataConsulta.split(' ')[0].replaceAll('-', '/')} às ${
            dataConsulta.split(' ')[1]
          }`}
        </DateHour>
        <Patient>
          <TextBold>Paciente: </TextBold>
          {paciente}
        </Patient>
        <Description>
          <TextBold>Observação: </TextBold>
          {observacao}
        </Description>
      </PatientContainer>

      <DoctorContainer>
        <DoctorName>
          <TextBold>Médico: </TextBold>
          {medico.nome}
        </DoctorName>
        {medico.email && (
          <DoctorEmail>
            <TextBold>Contato: </TextBold>
            {medico.email}
          </DoctorEmail>
        )}
      </DoctorContainer>
    </Container>
  );
}
