interface DoctorInterface {
  id: number;
  nome: string;
  email: string;
}

export interface AppointmentModel {
  id: number;
  medico: DoctorInterface;
  paciente: string;
  dataConsulta: string;
  observacao: string;
}
