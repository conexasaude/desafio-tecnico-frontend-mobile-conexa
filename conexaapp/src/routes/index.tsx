import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';
import {useEffect, useState} from 'react';
import {Splash} from '@screens/splash/view';
import {Loading} from '@components/loading/view';
import {Dialog} from '@components/dialog/view';
import {useAppContext} from '@hooks/use-app.hook';
import {useAuthContext} from '@hooks/use-auth.hook';

export function Routes() {
  const [splashVisible, setSplashVisible] = useState(true);
  const {authToken} = useAuthContext();

  const {
    isLoading,
    dialogMessage,
    dialogTitle,
    dialogVisible,
    onRequestCloseDialog,
  } = useAppContext();

  useEffect(() => {
    setTimeout(() => setSplashVisible(prev => !prev), 2000);
  }, []);

  if (splashVisible) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Dialog
        visible={dialogVisible}
        onRequestClose={onRequestCloseDialog}
        title={dialogTitle}
        message={dialogMessage}
      />
      {authToken ? <AppRoutes /> : <AuthRoutes />}
      {isLoading && <Loading />}
    </NavigationContainer>
  );
}
