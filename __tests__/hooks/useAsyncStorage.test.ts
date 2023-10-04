import { useAsyncStorage } from '@/hooks/useAsyncStorage';
import { StorageKeys } from '@/lib/constants/storageKeys';

describe('useAsyncStorage', () => {
  test('should save and read data correctly', async () => {
    const { save, read } = useAsyncStorage();
    const key = 'testKey' as StorageKeys;
    const data = { name: 'Maria', age: 30 };

    await save(key, data);
    const savedData = await read(key);

    expect(savedData).toEqual(data);
  });

  test('should remove data correctly', async () => {
    const { save, read, remove } = useAsyncStorage();
    const key = 'testKey' as StorageKeys;
    const data = { name: 'Bob', age: 24 };

    await save(key, data);
    await remove(key);
    const removedData = await read(key);

    expect(removedData).toBeNull();
  });
});
