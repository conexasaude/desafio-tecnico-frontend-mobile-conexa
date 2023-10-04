import { AccountModel } from '~/domain/models';

import faker from 'faker';

export const mockAccountModel = (): AccountModel => ({
  nome: faker.name.findName(),
  email: faker.internet.email(),
  token: faker.datatype.uuid(),
});
