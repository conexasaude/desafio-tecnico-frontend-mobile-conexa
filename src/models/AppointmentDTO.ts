import { DoctorDTO } from './DoctorDTO'

export type Appointment = {
  id: number
  medico: DoctorDTO
  paciente: string
  dataConsulta: string
  observacao: string
}
