import { Appointment, AppointmentForm } from "../types/appointment";
import api from "./api";

export async function getAppointments(): Promise<Appointment[]> {
	const response = await api.get('consultas', { params: { authRequired: true } })

	return response.data.data
}

export async function newAppointment(body: AppointmentForm): Promise<void> {
	const response = await api.post('consulta', {
		...body
	}, { params: { authRequired: true } })
	
	return response.data.data
}