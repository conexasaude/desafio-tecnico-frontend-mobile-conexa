import {SignInResponseDTO} from '@dtos/sign-in.dtos';
import {BaseUserModel, UserModel} from '@models/user.model';

interface FromBaseUserModelToUserModelProps {
  user: BaseUserModel;
  signOut: () => Promise<void>;
}

class UserMap {
  static fromSignInResponseDTOToUserModel(
    {data}: SignInResponseDTO,
    signOut: () => Promise<void>,
  ): UserModel {
    return {
      nome: data.nome,
      email: data.email,
      signOut,
    } as UserModel;
  }

  static fromUserModelToBaseUserModel({nome, email}: UserModel): BaseUserModel {
    return {
      nome,
      email,
    } as BaseUserModel;
  }

  static fromBaseUserModelToUserModel({
    user,
    signOut,
  }: FromBaseUserModelToUserModelProps): UserModel {
    const {nome, email} = user;

    return {
      nome,
      email,
      signOut,
    } as UserModel;
  }
}

export {UserMap};
