import { View } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome } from '@expo/vector-icons';
import RootStackParamList from '../../types/rootStackParamList';
import { formatWeekdayDateTime } from '../../utils/dateFormat';
import { Container, Field, Header, HeaderText, Label, Observation, TextContainer } from './styles';
import { useEffect } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentDetails'>;

export default function AppointmentDetails({ route, navigation }: Props) {
	const { appointment } = route.params;
	
	useEffect(() => {
		navigation.setOptions({ title: `Consulta ${appointment.id}` })
	}, [])

	return (
		<Container>
			<Header>
				<View>
					<FontAwesome name="user-circle-o" size={72} color="black" />
				</View>
				<TextContainer>
					<HeaderText>{`${formatWeekdayDateTime(appointment.dataConsulta)}`}</HeaderText>
					<HeaderText>{appointment.paciente}</HeaderText>
				</TextContainer>
			</Header>
				
			<Field>
				<Label>Observação: </Label>
				<Observation>{appointment.observacao}</Observation>
			</Field>
		</Container>
    )
}