import {AppContext} from '@contexts/app.context';
import {useContext} from 'react';

export function useAppContext() {
  const context = useContext(AppContext);

  return context;
}
