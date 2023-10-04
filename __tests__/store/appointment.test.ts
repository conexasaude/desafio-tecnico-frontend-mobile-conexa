import MockAdapter from 'axios-mock-adapter';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { api } from '@/lib/axios';
import { Dispatch } from 'react';
import { Appointment } from '@/models/appointment';
import {
  fetchAppointmentById,
  fetchAppointments,
  createAppointment,
} from '@/store/thunks/appointment.thunk';
import { appointmentSlice } from '@/store/slices/appointment.slice';

const mockedAppointments: { data: Appointment[] } = {
  data: [
    {
      id: 16,
      medico: {
        id: 1,
        nome: 'Dr. Alex Green',
        email: null,
      },
      paciente: 'Maria Brown',
      dataConsulta: '2020-04-23 08:30',
      observacao: 'Exemplo de consulta',
    },
    {
      id: 11,
      medico: {
        id: 1,
        nome: 'Dr. Daniel Vieira',
        email: null,
      },
      paciente: 'Bob Grey',
      dataConsulta: '2020-04-23 08:30',
      observacao: 'Exemplo de consulta',
    },
  ],
};

const mockedAppointment: { data: Appointment } = {
  data: {
    id: 16,
    medico: {
      id: 1,
      nome: 'Dr. Alex Green',
      email: null,
    },
    paciente: 'Maria Brown',
    dataConsulta: '2020-04-23 08:30',
    observacao: 'Exemplo de consulta',
  },
};

const mockError = 'Request failed with status code 500';

describe('appointmentSlice', () => {
  let store: EnhancedStore;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    store = configureStore({
      reducer: { appointment: appointmentSlice.reducer },
    });

    mockAxios = new MockAdapter(api);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('should handle fetch appointments success', async () => {
    const mockOnSuccess = jest.fn();

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onGet('/api/consultas').reply(200, mockedAppointments);

    await dispatch(fetchAppointments({ onSuccess: mockOnSuccess }));

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
    expect(state.appointments).toEqual(mockedAppointments.data);

    expect(mockOnSuccess).toHaveBeenCalled();
  });

  test('should handle fetch appointments failure and use rejectWithValue', async () => {
    const mockOnError = jest.fn();

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onGet('/api/consultas').reply(500, { error: mockError });

    await dispatch(fetchAppointments({ onError: mockOnError }));

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError);
    expect(state.appointments).toEqual([]);
    expect(mockOnError).toHaveBeenCalled();
  });

  test('should handle fetch appointment by id success', async () => {
    const mockOnSuccess = jest.fn();

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onGet('/api/consulta/16').reply(200, mockedAppointment);

    await dispatch(fetchAppointmentById({ id: 16, onSuccess: mockOnSuccess }));

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
    expect(state.appointment).toEqual(mockedAppointment.data);
    expect(mockOnSuccess).toHaveBeenCalled();
  });

  test('should handle fetch appointment by id failure and use rejectWithValue', async () => {
    const mockOnError = jest.fn();

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onGet('/api/consulta/16').reply(500, { error: mockError });

    await dispatch(fetchAppointmentById({ id: 16, onError: mockOnError }));

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError);
    expect(state.appointment).toEqual(undefined);
    expect(mockOnError).toHaveBeenCalled();
  });

  test('should handle create appointment success', async () => {
    const mockOnSuccess = jest.fn();
    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onPost('/api/consulta').reply(201, mockedAppointment);

    const beforeState = store.getState().appointment;

    await dispatch(
      createAppointment({
        data: {
          date: '2020-04-23',
          time: '08:30',
          patient: 'Maria Brown',
          observation: 'Exemplo de consulta',
        },
        onSuccess: mockOnSuccess,
      }),
    );

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
    expect(state.appointments).toEqual([
      ...beforeState.appointments,
      mockedAppointment.data,
    ]);

    expect(mockOnSuccess).toHaveBeenCalled();
  });

  test('should handle create appointment failure and use rejectWithValue', async () => {
    const mockOnError = jest.fn();

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onPost('/api/consulta').reply(500, { error: mockError });

    await dispatch(
      createAppointment({
        data: {
          date: '2020-07-14',
          time: '01:02',
          patient: 'Rafael Braga',
          observation: 'Teste de inclusao de consulta',
        },
        onError: mockOnError,
      }),
    );

    const state = store.getState().appointment;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError);
    expect(mockOnError).toHaveBeenCalled();
  });
});
