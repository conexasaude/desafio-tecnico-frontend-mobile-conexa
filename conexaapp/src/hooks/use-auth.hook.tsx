import {AuthContext} from '@contexts/auth.context';
import {useContext} from 'react';

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
