import { View } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome } from '@expo/vector-icons';
import RootStackParamList from '../../types/rootStackParamList';
import formatsDate from '../../utils/formatsDate';
import { Container, Content, Field, FieldContainer, Header, FieldText, Label } from './styles';
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
				<FieldContainer>
					<Field>
						<Label>Paciente:</Label>
						<FieldText>{appointment.paciente}</FieldText>
					</Field>

					<Field>
						<Label>Data e hora: </Label>
						<FieldText>{`${formatsDate(appointment.dataConsulta, 'weekday-date-time')}`}</FieldText>
					</Field>
				</FieldContainer>
			</Header>
				
			<Content>
				<Field>
					<Label>Observação: </Label>
					<FieldText>{appointment.observacao}</FieldText>
				</Field>
			</Content>
		</Container>
    )
}