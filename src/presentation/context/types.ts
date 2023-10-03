import { AccountModel } from '~/domain/models';

export interface AuthContextInterface {
  user: AccountModel | undefined;
  isLoading: boolean;
}
