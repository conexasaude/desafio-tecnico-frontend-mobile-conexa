import {createContext, ReactNode, useEffect, useState} from 'react';
import {signIn} from '@infra/http/repositories/user.repository';
import {client} from '@infra/http/client.http';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '@infra/storage/user.storage';
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from '@infra/storage/auth-token.storage';
import {UserModel} from '@models/user.model';
import {UserMap} from '../mappers/user.map';
import {useAppContext} from '@hooks/use-app.hook';

export type AuthContextDataProps = {
  user: UserModel;
  authToken: string | null;
  signInUser: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserModel>({} as UserModel);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const {setIsLoading} = useAppContext();

  async function userAndTokenUpdate(userData: UserModel, token: string) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(userData);
    setAuthToken(token);
  }

  async function storageUserAndTokenSave(userData: UserModel, token: string) {
    try {
      setIsLoading(true);
      const userDataConverted = UserMap.fromUserModelToBaseUserModel(userData);

      await storageUserSave(userDataConverted);
      await storageAuthTokenSave(token);
    } finally {
      setIsLoading(false);
    }
  }

  async function signInUser(email: string, password: string) {
    const response = await signIn({email, password});

    if (response.data.nome && response.data.token) {
      const userData = UserMap.fromSignInResponseDTOToUserModel(
        response,
        signOut,
      );

      await storageUserAndTokenSave(userData, response.data.token);
      await userAndTokenUpdate(userData, response.data.token);
    }
  }

  async function signOut() {
    try {
      setIsLoading(true);
      setUser({} as UserModel);
      setAuthToken(null);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } finally {
      setIsLoading(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoading(true);

      const token = await storageAuthTokenGet();
      const storedUser = await storageUserGet();
      if (token && storedUser) {
        const storedUserConverted = UserMap.fromBaseUserModelToUserModel({
          user: storedUser,
          signOut,
        });

        userAndTokenUpdate(storedUserConverted, token);
      }
    } catch (error) {
      console.log('[loadUserData] error =>', error);

      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        signInUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthContextProvider};
