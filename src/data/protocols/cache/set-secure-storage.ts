export interface SetSecureStorage {
  set: (key: string, value: object) => Promise<void>;
}
