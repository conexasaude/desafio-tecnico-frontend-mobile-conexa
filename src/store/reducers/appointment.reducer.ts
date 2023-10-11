import { Appointment } from '@models/AppointmentDTO'

import {
  APPOINTMENTS_REQUEST,
  APPOINTMENTS_SUCCESS,
  APPOINTMENTS_FAILURE,
  APPOINTMENT_REQUEST,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_FAILURE,
} from '../actions/appointment.actions'
import { PayloadAction } from '@reduxjs/toolkit'

interface AppointmentsState {
  loading: boolean
  appointments?: Array<Appointment>
}

interface AppointmentState {
  loading: boolean
  success: boolean
  appointment?: Appointment
}

const initialStateAppointments: AppointmentsState = {
  loading: false,
  appointments: [],
}

const initialStateAppointment: AppointmentState = {
  loading: false,
  success: false,
  appointment: undefined,
}

export const appointmentsReducer = (
  state = initialStateAppointments,
  action: PayloadAction<Appointment[]>,
): AppointmentsState => {
  switch (action.type) {
    case APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: action.payload,
      }
    case APPOINTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        appointments: undefined,
      }
    default:
      return state
  }
}

export const appointmentReducer = (
  state = initialStateAppointment,
  action: PayloadAction<Appointment>,
): AppointmentState => {
  switch (action.type) {
    case APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        appointment: action.payload,
      }
    case APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        appointment: undefined,
      }
    default:
      return state
  }
}
