import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';
import { auth } from '../services/auth';

type StoredUser = Omit<User, 'token'>

interface UserContextType {
  user: StoredUser | null;
  getAuthUser: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<StoredUser | null>(null);

  async function getAuthUser(email: string, password: string) {
    try {
      // if(email === "") {
      //   throw new Error("Digite um email")
      // }

      // if(password === "") {
      //   throw new Error("Digite uma senha")
      // }

      const { nome, token } = await auth(email, password)
      await AsyncStorage.setItem('token', token);
      setUser({ email, nome });
    } catch (error) {
      alert(error)
    }
  }

  async function logout() {
    await AsyncStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, getAuthUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
