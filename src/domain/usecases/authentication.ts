import { AccountModel } from '~/domain/models';

export interface AuthenticationParams {
  email: string;
  password: string;
}

export interface Authentication {
  execute: (params: AuthenticationParams) => Promise<{ data: AccountModel }>;
}
