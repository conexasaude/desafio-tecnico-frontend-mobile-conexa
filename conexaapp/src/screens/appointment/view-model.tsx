import {useEffect, useState} from 'react';
import {useAppContext} from '@hooks/use-app.hook';
import {IAppointment} from '@interfaces/appointment.interface';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import {fetchAppointmentById} from '@infra/http/repositories/appointment.repository';

interface RouteParamsProps {
  id: number;
}

export interface AppointmentViewModel {
  appointment: IAppointment;
  handleGoBack: () => void;
}

function useAppointmentViewModel(): AppointmentViewModel {
  const {goBack} = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const {id} = route.params as RouteParamsProps;

  const {setIsLoading, onOpenDialog} = useAppContext();
  const [appointment, setAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );

  async function getAppointmentById() {
    try {
      setIsLoading(true);
      const {data} = await fetchAppointmentById({id});
      setAppointment(data);
      setIsLoading(false);
    } catch (error) {
      onOpenDialog({message: error.message, title: 'Erro'});
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    goBack();
  }

  useEffect(() => {
    getAppointmentById();
  }, []);

  return {
    appointment,
    handleGoBack,
  };
}

export {useAppointmentViewModel};
