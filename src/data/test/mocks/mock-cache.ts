import { GetSecureStorage } from '~/data/protocols/cache';

import faker from 'faker';

export class GetSecureStorageSpy implements GetSecureStorage {
  key: string;
  value: any = faker.random.objectElement();

  get(key: string): any {
    this.key = key;
    return JSON.stringify(this.value);
  }
}
