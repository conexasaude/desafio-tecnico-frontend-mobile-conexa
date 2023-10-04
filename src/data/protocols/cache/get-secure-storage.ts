export interface GetSecureStorage {
  get: (key: string) => Promise<any>;
}
