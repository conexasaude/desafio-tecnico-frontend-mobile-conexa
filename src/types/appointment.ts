export type Appointment = {
	dataConsulta: string
    id: number
    medico: {
        id: number,
        nome: string,
        email: null
    }
    observacao: string
    paciente: string
}

export type AppointmentForm = {
    idMedico: number
    paciente: string
	dataConsulta: Date
    observacao: string
}