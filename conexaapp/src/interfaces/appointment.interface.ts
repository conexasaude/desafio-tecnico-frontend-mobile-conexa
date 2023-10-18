export interface IAppointment {
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
