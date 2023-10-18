import {SignInRequestDTO, SignInResponseDTO} from '@dtos/sign-in.dtos';
import {client} from '../client.http';

async function signIn({email, password}: SignInRequestDTO) {
  const {data} = await client.post<SignInResponseDTO>('/login', {
    email,
    senha: password,
  });

  return data;
}

export {signIn};
