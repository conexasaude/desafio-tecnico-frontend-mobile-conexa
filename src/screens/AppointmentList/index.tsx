import { FlatList, View } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAppointments } from '../../services/appointment';
import { Appointment } from '../../types/appointment';
import RootStackParamList from '../../types/rootStackParamList';
import AppointmentCard from '../../components/AppointmentCard';
import SearchInput from '../../components/SearchInput';
import { Container } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentList'>;

export default function AppointmentList({ navigation }: Props) {
	const [appointments, setAppointments] = useState<Appointment[]>([])
	const [loading, setLoading] = useState(false)
	const [search, setSearch] = useState("")

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

	function filterAppointments(appointments: Appointment[]) {
		if(search !== '') {
			return appointments.filter(appointment => 
				String(appointment.id).toLocaleLowerCase().includes(search.toLocaleLowerCase())  || appointment.paciente.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			)
		} else {
			return appointments
		}
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
				
			<Container>
				<SearchInput value={search} onChangeText={setSearch} />

				<FlatList
					data={filterAppointments(appointments)}
					renderItem={({item}) => 
						<AppointmentCard
							id={String(item.id)}
							onPress={() => navigateToDetails(item)} 
							pacient={item.paciente}
							date={item.dataConsulta}
						/>
					}
					style={{ paddingHorizontal: 16 }}
				>
				</FlatList>
			</Container>
		</>
	)
}