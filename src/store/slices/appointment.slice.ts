import { createSlice } from '@reduxjs/toolkit';
import { Appointment } from '@/models/appointment';
import {
  createAppointment,
  fetchAppointmentById,
  fetchAppointments,
} from '../thunks/appointment.thunk';

interface State {
  loading: boolean;
  error?: string;
  appointments: Array<Appointment>;
  appointment?: Appointment;
}

const initialState: State = {
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
    });

    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.loading = false;
      state.appointments = [...state.appointments, action.payload];
    });

    builder.addCase(createAppointment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
