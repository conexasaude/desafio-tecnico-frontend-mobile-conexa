import { httpClient } from '@http-client'
import { AppointmentFormValues } from '@schemas/appointmentSchema'

import { Dispatch } from 'redux'

export const APPOINTMENTS_REQUEST = 'APPOINTMENTS_REQUEST'
export const APPOINTMENTS_SUCCESS = 'APPOINTMENTS_SUCCESS'
export const APPOINTMENTS_FAILURE = 'APPOINTMENTS_FAILURE'

export const APPOINTMENT_REQUEST = 'APPOINTMENT_REQUEST'
export const APPOINTMENT_SUCCESS = 'APPOINTMENT_SUCCESS'
export const APPOINTMENT_FAILURE = 'APPOINTMENT_FAILURE'

export const fetchAppointments = () => async (dispatch: Dispatch) => {
  dispatch({ type: APPOINTMENTS_REQUEST })

  try {
    const { data } = await httpClient.get('/api/consultas')
    dispatch({ type: APPOINTMENTS_SUCCESS, payload: data.data })
  } catch (error) {
    dispatch({ type: APPOINTMENTS_FAILURE })
  }
}

export const fetchAppointmentById =
  (id: number) => async (dispatch: Dispatch) => {
    dispatch({ type: APPOINTMENT_REQUEST })

    try {
      const { data } = await httpClient.get(`/api/consulta/${id}`)
      dispatch({ type: APPOINTMENT_SUCCESS, payload: data.data })
    } catch (error) {
      dispatch({ type: APPOINTMENT_FAILURE })
    }
  }

export const createAppointment =
  (form: AppointmentFormValues) => async (dispatch: Dispatch) => {
    dispatch({ type: APPOINTMENT_REQUEST })

    try {
      const { data } = await httpClient.post('/api/consulta', {
        idMedico: 1,
        paciente: form.patient,
        dataConsulta: form.appointmentDate,
        observation: form.observation,
      })

      dispatch({ type: APPOINTMENT_SUCCESS, payload: data.data })
    } catch (error) {
      dispatch({ type: APPOINTMENTS_FAILURE })
    }
  }
