import faker from 'faker';
import { CreateAppointmentParam } from '~/domain/usecases';

export const mockCreateAppointmentParams = (): CreateAppointmentParam => {
  return {
    dataConsulta: faker.date.soon().toString(),
    idMedico: faker.datatype.number({ min: 0, max: 20 }),
    observacao: faker.random.words(),
    paciente: faker.random.words(),
  };
};
