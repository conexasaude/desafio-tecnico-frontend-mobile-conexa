import {useEffect, useState} from 'react';
import {useAppContext} from '@hooks/use-app.hook';
import {IAppointment} from '@interfaces/appointment.interface';
import {fetchAppointments} from '@infra/http/repositories/appointment.repository';
import {useAuthContext} from '@hooks/use-auth.hook';
import {UserModel} from '@models/user.model';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';

export interface HomeViewModel {
  user: UserModel;
  appointments: IAppointment[];
  refresh: boolean;
  getAppointments: (refresh: boolean) => Promise<void>;
  handleSignOut: () => Promise<void>;
  handleCreateAppointment: () => void;
}

function useHomeViewModel(): HomeViewModel {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();
  const {user} = useAuthContext();
  const {setIsLoading, onOpenDialog} = useAppContext();

  const [refresh, setRefresh] = useState(false);
  const [appointments, setAppointments] = useState<IAppointment[]>(
    [] as IAppointment[],
  );

  async function getAppointments(refresh: boolean = false) {
    try {
      if (refresh) {
        setRefresh(true);
      } else {
        setIsLoading(true);
      }
      const {data} = await fetchAppointments();
      setAppointments(data);
      setIsLoading(false);
      setRefresh(false);
    } catch (error) {
      onOpenDialog({message: error.message, title: 'Erro'});
      setIsLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      setIsLoading(true);
      await user.signOut();
      setIsLoading(false);
    } catch (error) {
      onOpenDialog({message: error.message, title: 'Erro'});
      setIsLoading(false);
    }
  }

  function handleCreateAppointment() {
    navigate('create-appointment');
  }

  useEffect(() => {
    getAppointments();
  }, []);

  return {
    user,
    appointments,
    refresh,
    getAppointments,
    handleSignOut,
    handleCreateAppointment,
  };
}

export {useHomeViewModel};
