import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from '@/routes/auth';
import { LoggedStack } from '@/routes/logged';
import { useAsyncStorage } from '@/hooks/useAsyncStorage';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { userSlice } from '@/store/slices/user.slice';
import { SyncScreen } from '@/screens/Sync';

export function Routes() {
  const [isSync, setIsSync] = useState(true);
  const { user } = useReduxSelector(state => state.user);
  const { read } = useAsyncStorage();

  const dispatch = useReduxDispatch();

  const getUserAsyncStorage = useCallback(async () => {
    const data = await read('user');

    if (data) {
      dispatch(userSlice.actions.rememberLogin(data));
    }

    setIsSync(false);
  }, [dispatch, read]);

  useEffect(() => {
    getUserAsyncStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSync) {
    return <SyncScreen />;
  }

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <LoggedStack />}
    </NavigationContainer>
  );
}
