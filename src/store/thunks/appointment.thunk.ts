import { api } from '@/lib/axios';
import { ThunkCallback } from '@/lib/utils';
import { FormScheduleAppointment } from '@/validations/appointment';
import { Appointment } from '@/models/appointment';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchAppointmentsDTO extends ThunkCallback {}

export const fetchAppointments = createAsyncThunk(
  '/api/consultas',
  async ({ onSuccess, onError }: FetchAppointmentsDTO, { rejectWithValue }) => {
    try {
      const { data: response } = await api.get<{ data: Array<Appointment> }>(
        '/api/consultas',
      );
      onSuccess && onSuccess();
      return response.data;
    } catch (error: any) {
      onError && onError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

interface FetchAppointmentByIdDTO extends ThunkCallback {
  id: number;
}

export const fetchAppointmentById = createAsyncThunk(
  '/api/consulta/${id}',
  async (
    { id, onSuccess, onError }: FetchAppointmentByIdDTO,
    { rejectWithValue },
  ) => {
    try {
      const { data: response } = await api.get<{ data: Appointment }>(
        `/api/consulta/${id}`,
      );

      onSuccess && onSuccess();
      return response.data;
    } catch (error: any) {
      onError && onError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

interface CreateAppointmentDTO extends ThunkCallback {
  data: FormScheduleAppointment;
}

export const createAppointment = createAsyncThunk(
  '/api/consulta',
  async (
    { data, onSuccess, onError }: CreateAppointmentDTO,
    { rejectWithValue },
  ) => {
    try {
      const { data: result } = await api.post<{ data: Appointment }>(
        '/api/consulta',
        {
          idMedico: 1,
          paciente: data.patient,
          dataConsulta: `${data.date}T${data.time}`,
          observacao: data.observation,
        },
      );

      onSuccess && onSuccess();

      return result.data;
    } catch (error: any) {
      onError && onError(error.message);
      return rejectWithValue(error.message);
    }
  },
);
