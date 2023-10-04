import { createSlice } from '@reduxjs/toolkit';
import { Appointment } from '@/models/appointment';
import {
  createAppointment,
  fetchAppointmentById,
  fetchAppointments,
} from '../thunks/appointment.thunk';

export interface AppointmentState {
  loading: boolean;
  error?: string;
  appointments: Array<Appointment>;
  appointment?: Appointment;
}

const initialState: AppointmentState = {
  loading: false,
  error: undefined,
  appointments: [],
  appointment: undefined,
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAppointments.pending, (state, _) => {
      state.loading = true;
      state.appointments = [];
      state.error = undefined;
    });

    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    });

    builder.addCase(fetchAppointments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchAppointmentById.pending, (state, _) => {
      state.loading = true;
      state.appointment = undefined;
      state.error = undefined;
    });

    builder.addCase(fetchAppointmentById.fulfilled, (state, action) => {
      state.loading = false;
      state.appointment = action.payload;
    });

    builder.addCase(fetchAppointmentById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(createAppointment.pending, (state, _) => {
      state.loading = true;
      state.error = undefined;
    });

    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.loading = false;
      // COMO A API DE CREATE NAO PERCISTE NO BANCO DE DADOS DECIDI INCREMENTAR COM HARD CODE PARA DEIXAR O USUARIO COM ALGUM RETORNO VISUAL
      state.appointments = [...state.appointments, action.payload];
    });

    builder.addCase(createAppointment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
