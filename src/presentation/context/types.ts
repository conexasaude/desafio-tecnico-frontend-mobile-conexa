import { Dispatch, SetStateAction } from 'react';
import { AccountModel } from '~/domain/models';

export interface AuthContextInterface {
  user: AccountModel | undefined;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<AccountModel | undefined>>;
}
