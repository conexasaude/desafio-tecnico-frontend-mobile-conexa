import { useState, useContext } from 'react';

// Adapters
import { deleteCurrentAccountAdapter } from '~/main/adapters';

// Context
import { AuthContext } from '~/presentation/context';

export function useAccountScreenViewController() {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(AuthContext);
  async function signOut() {
    setIsLoading(true);
    await deleteCurrentAccountAdapter();
    setIsLoading(false);
    setUser(undefined);
  }

  return {
    isLoading,
    user,
    signOut,
  };
}
