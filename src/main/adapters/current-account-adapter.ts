import { makeLocalSecureStorageAdapter } from '~/main/factories/cache';
import { AccountModel } from '~/domain/models';

export const setCurrentAccountAdapter = (account: AccountModel): Promise<void> => {
  return makeLocalSecureStorageAdapter().set('account', account);
};

export const getCurrentAccountAdapter = (): Promise<string> => {
  return makeLocalSecureStorageAdapter().get('account') as Promise<string>;
};

export const deleteCurrentAccountAdapter = (): Promise<void> => {
  return makeLocalSecureStorageAdapter().delete('account');
};
