import React, { useState, createContext, useEffect } from 'react';
import { getCurrentAccountAdapter } from '~/main/adapters';

// Types
import { AuthContextInterface } from './types';

export const AuthContext = createContext<AuthContextInterface>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(undefined);

  async function isSignedIn() {
    try {
      setIsLoading(true);
      const userAccount = await getCurrentAccountAdapter();
      const parseUserAccount = JSON.parse(userAccount);
      setUser(parseUserAccount);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void isSignedIn();
  }, []);

  return <AuthContext.Provider value={{ isLoading, user }}>{children}</AuthContext.Provider>;
};
