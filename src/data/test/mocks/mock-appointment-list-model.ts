import { AppointmentModel } from '~/domain/models';
import { mockAppointmentModel } from '~/domain/test';

export const mockAppointmentListModel = (): AppointmentModel[] => [
  mockAppointmentModel(),
  mockAppointmentModel(),
];
