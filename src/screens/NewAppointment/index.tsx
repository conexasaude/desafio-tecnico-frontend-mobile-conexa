import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from '../../types/rootStackParamList';
import { Container, Label } from './styles';
import Input from '../../components/Input';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Select from '../../components/Select';
import { pacients } from '../../utils/selectOptions';
import { AppointmentForm } from '../../types/appointment';
import { newAppointment } from '../../services/appointment';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Spinner from 'react-native-loading-spinner-overlay';

type Props = NativeStackScreenProps<RootStackParamList, 'NewAppointment'>;

export default function NewAppointment({ navigation }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState<AppointmentForm>({
		idMedico: 1,
		paciente: "",
		dataConsulta: new Date(),
		observacao: "",
	})

  const onChange = (event: DateTimePickerEvent, date?: Date | undefined) => {
    setForm({ ...form, dataConsulta: date! })
  };

	async function createNewAppointment() {
    try {
			if(form.paciente === "") {
        throw new Error("Escolha um paciente")
      }

			setLoading(true)
			await newAppointment(form)
			setModalVisible(true)
			setLoading(false)
		} catch (error) {
      alert(error)
    }
  }

	function backHome() {
		navigation.navigate('Home')
	}

	function resetForm() {
		setForm({
			idMedico: 1,
			paciente: "",
			dataConsulta: new Date(),
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
				textStyle={{color: '#FFF'}}
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

					<Label>Data da consulta:</Label>
					<DateTimePicker
						testID="dateTimePicker"
						value={form.dataConsulta}
						mode="datetime"
						onChange={onChange}
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