import { AppointmentModel } from '~/domain/models';

export interface GetAppointments {
  execute(): Promise<{ data: AppointmentModel[] }>;
}
