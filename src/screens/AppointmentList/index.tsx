import { FlatList } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAppointments } from '../../services/appointment';
import { Appointment } from '../../types/appointment';
import RootStackParamList from '../../types/rootStackParamList';
import AppointmentCard from '../../components/AppointmentCard';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentList'>;

export default function AppointmentList({ navigation }: Props) {
	const [appointments, setAppointments] = useState<Appointment[]>([])
	const [loading, setLoading] = useState(false)

	async function fetchAppointments() {
		setLoading(true)
		const response = await getAppointments()
		setAppointments(response)
		setLoading(false)
	}

	async function navigateToDetails(appointment: Appointment) {
		navigation.navigate('AppointmentDetails', {
			appointment
		})
	}
    
    
	useEffect(() => {
		fetchAppointments()
	}, [])

	return (
		<>
			<Spinner
				visible={loading}
				textContent={'Carregando...'}
				textStyle={{color: '#FFF'}}
			/>
				
			<FlatList
				data={appointments}
				renderItem={({item}) => 
					<AppointmentCard
						id={String(item.id)}
						onPress={() => navigateToDetails(item)} 
						pacient={item.paciente}
						date={item.dataConsulta}
						observation={item.observacao}
					/>
				}
				style={{ padding: 16 }}
			>
			</FlatList>
		</>
	)
}