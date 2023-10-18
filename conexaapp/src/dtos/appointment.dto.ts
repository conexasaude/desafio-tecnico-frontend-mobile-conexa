export interface AppointmentBase {
  id: number;
  medico: {
    id: number;
    nome: string;
    email: string | null;
  };
  paciente: string;
  dataConsulta: string;
  observacao: string;
}
export interface AppointmentResponseDTO {
  data: AppointmentBase;
}

export interface AppointmentsResponseDTO {
  data: AppointmentBase[];
}

export interface AppointmentDetailsRequestDTO {
  id: number;
}

export interface CreateAppointmentRequestDTO {
  idMedico: number;
  paciente: string;
  dataConsulta: string;
  observacao: string;
}
