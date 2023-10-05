import { GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Pacient, AppointmentDate, Field, Title, Header } from './styles';
import formatsDate from '../../utils/formatsDate';

interface AppointmentCardProps {
    id: string
    onPress: (event: GestureResponderEvent) => void
    pacient: string
    date: string
}

export default function AppointmentCard({ id, date, onPress, pacient }: AppointmentCardProps) {

  return (
    <Container id={id} onPress={onPress}>
        <Header>
            <Title>Consulta #{id}</Title>
            <AppointmentDate>{formatsDate(date, 'day-month-year')}</AppointmentDate>
        </Header>
        <Field>
            <MaterialCommunityIcons name="account" size={20} color="#FFF" />
            <Pacient>{pacient}</Pacient>
        </Field>
        <Field>
            <MaterialCommunityIcons name="clock" size={20} color="#FFF" />
            <AppointmentDate>{formatsDate(date, 'time')}</AppointmentDate>
        </Field>
    </Container>
  );
}
