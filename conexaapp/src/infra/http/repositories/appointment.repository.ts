import {
  AppointmentDetailsRequestDTO,
  AppointmentResponseDTO,
  AppointmentsResponseDTO,
  CreateAppointmentRequestDTO,
} from '@dtos/appointment.dto';
import {client} from '../client.http';

async function fetchAppointments() {
  const {data} = await client.get<AppointmentsResponseDTO>('/consultas');
  return data;
}

async function fetchAppointmentById({id}: AppointmentDetailsRequestDTO) {
  const {data} = await client.get<AppointmentResponseDTO>(`/consulta/${id}`);
  return data;
}

async function createAppointment(body: CreateAppointmentRequestDTO) {
  return await client.post<Promise<void>>(`/consulta`, body);
}

export {fetchAppointments, fetchAppointmentById, createAppointment};
