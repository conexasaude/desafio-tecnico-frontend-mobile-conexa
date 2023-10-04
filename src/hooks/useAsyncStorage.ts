import AsyncStorage from '@react-native-async-storage/async-storage';

import { rootKeys, StorageKeys } from '@/lib/constants/storageKeys';

export function useAsyncStorage() {
  async function save(key: StorageKeys, data: unknown) {
    await AsyncStorage.setItem(rootKeys[key], JSON.stringify(data));
  }

  async function read(key: StorageKeys) {
    const data = await AsyncStorage.getItem(rootKeys[key]);
    return data ? JSON.parse(data) : null;
  }

  async function remove(key: StorageKeys) {
    await AsyncStorage.removeItem(rootKeys[key]);
  }

  return { save, read, remove };
}
