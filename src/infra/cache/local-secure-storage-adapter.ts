import { SetSecureStorage, GetSecureStorage } from '~/data/protocols/cache';
import * as SecureStore from 'expo-secure-store';

export class LocalSecureStorageAdapter implements SetSecureStorage, GetSecureStorage {
  async set(key: string, value: object): Promise<void> {
    return await SecureStore.setItemAsync(key, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    return await SecureStore.getItemAsync(key);
  }
}
