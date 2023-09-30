import { AppointmentModel } from '~/domain/models';

export interface CreateAppointmentParam {
  idMedico: number;
  paciente: string;
  dataConsulta: string;
  observacao: string;
}
export interface CreateAppointment {
  execute(params: CreateAppointmentParam): Promise<AppointmentModel>;
}
