interface Doctor {
  id: number
  nome: string
  email: null
}

export interface Appointment {
  id: number
  medico: Doctor
  paciente: string
  dataConsulta: string
  observacao: string
}
