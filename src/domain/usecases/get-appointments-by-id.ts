import { AppointmentModel } from '~/domain/models';

export interface GetAppointmentsById {
  execute(): Promise<{ data: AppointmentModel }>;
}
