import { AppointmentModel } from '~/domain/models';

import faker from 'faker';

export const mockAppointmentModel = (): AppointmentModel => ({
  id: faker.datatype.number({ min: 0, max: 20 }),
  medico: {
    id: faker.datatype.number({ min: 0, max: 20 }),
    nome: faker.random.words(),
    email: faker.internet.email(),
  },
  paciente: faker.random.words(),
  dataConsulta: faker.date.soon().toString(),
  observacao: faker.random.words(),
});
