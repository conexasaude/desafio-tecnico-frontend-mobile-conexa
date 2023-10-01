import { makeLocalSecureStorageAdapter } from '~/main/factories/cache';
import { AccountModel } from '~/domain/models';

export const setCurrentAccountAdapter = (account: AccountModel): Promise<void> => {
  return makeLocalSecureStorageAdapter().set('account', account);
};

export const getCurrentAccountAdapter = (): Promise<AccountModel> => {
  return makeLocalSecureStorageAdapter().get('account') as Promise<AccountModel>;
};
