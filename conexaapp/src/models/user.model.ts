export interface BaseUserModel {
  nome: string;
  email: string;
}

export interface UserModel extends BaseUserModel {
  signOut: () => Promise<void>;
}
