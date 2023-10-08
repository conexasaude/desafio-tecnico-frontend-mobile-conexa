import { GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Pacient, AppointmentDate, Field, Title, Header, Content } from './styles';
import formatsDate from '../../utils/formatsDate';
import theme from '../../theme/theme';

interface AppointmentCardProps {
    id: string
    onPress: (event: GestureResponderEvent) => void
    pacient: string
    date: string
}

export default function AppointmentCard({ id, date, onPress, pacient }: AppointmentCardProps) {

  return (
    <Container id={id} onPress={onPress}>
        <Content>
            <Header>
                <Title>Consulta #{id}</Title>
                <AppointmentDate>{formatsDate(date, 'day-month-year')}</AppointmentDate>
            </Header>
            <Field>
                <MaterialCommunityIcons name="account" size={20} color={theme.colors.primary} />
                <Pacient>{pacient}</Pacient>
            </Field>
            <Field>
                <MaterialCommunityIcons name="clock" size={20} color={theme.colors.primary} />
                <AppointmentDate>{formatsDate(date, 'time')}</AppointmentDate>
            </Field>
        </Content>
    </Container>
  );
}
