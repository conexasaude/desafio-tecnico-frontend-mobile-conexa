import { Alert, Keyboard, Pressable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from '../../types/rootStackParamList';
import { Container } from './styles';
import Input from '../../components/Input';
import { useState } from 'react';
import Select from '../../components/Select';
import { pacients } from '../../utils/selectOptions';
import { AppointmentForm } from '../../types/appointment';
import { newAppointment } from '../../services/appointment';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../theme/theme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from '../../components/DatePicker';

type Props = NativeStackScreenProps<RootStackParamList, 'NewAppointment'>;

export default function NewAppointment({ navigation }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState<AppointmentForm>({
		idMedico: 1,
		paciente: "",
		dataConsulta: null,
		observacao: "",
	})
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
	  setDatePickerVisibility(true);
	};
  
	const hideDatePicker = () => {
	  setDatePickerVisibility(false);
	};
  
	const handleConfirm = (date: Date) => {
		hideDatePicker()
    setForm({ ...form, dataConsulta: date })
	};

	async function createNewAppointment() {
		setLoading(true)
		try {
			if(form.paciente === "") {
				throw new Error("Escolha um paciente")
			}

			if(form.dataConsulta === null) {
				throw new Error("Escolha uma data para a consulta")
			}

			await newAppointment(form)
			setModalVisible(true)
		} catch (error) {
			Alert.alert('Erro', String(error).replace('Error:', ''))
		} finally {
			setLoading(false)
		}
  }

	function backHome() {
		navigation.navigate('Home')
	}

	function resetForm() {
		setForm({
			idMedico: 1,
			paciente: "",
			dataConsulta: null,
			observacao: "",
		})
	}

	return (
		<>
			<Modal
				isVisible={modalVisible}
				changeVisibility={setModalVisible}
				backHome={backHome}
				resetForm={resetForm}
			/>
				
			<Spinner
				visible={loading}
				textContent={'Enviando...'}
				textStyle={{color: theme.colors.white}}
			/>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<Container>
					<Select
						label="Paciente"
						value={form.paciente}
						setValue={(value: string) => {
							setForm({ ...form, paciente: value })
						}}
						items={pacients}
					/>

					<Input
						label="Observação"
						onChangeText={(value) => setForm({ ...form, observacao: value })}
						value={form.observacao}
						placeholder='Observação'
						multiline
						numberOfLines={4}
						returnKeyType="done"
						blurOnSubmit={true}
					/>

					<DatePicker
						label="Data da consulta"
						value={form.dataConsulta}
						onPress={showDatePicker}
					/>

					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode="datetime"
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
						minimumDate={new Date()}
					/>

					<Button
						onPress={createNewAppointment}
						label="Cadastrar"
					/>
				</Container>
			</TouchableWithoutFeedback>
		</>
	)
}