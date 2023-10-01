import { Authentication, AuthenticationParams } from '~/domain/usecases';
import { mockAccountModel } from '~/domain/test/mocks';

import faker from 'faker';
import { AccountModel } from '~/domain/models';

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel();
  params: AuthenticationParams;
  callsCount = 0;

  async execute(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    this.callsCount++;
    return this.account;
  }
}
