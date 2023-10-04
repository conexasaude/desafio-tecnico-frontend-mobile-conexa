import { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';
import { useTheme } from 'styled-components';

// Helpers
import { addZeroToLeft } from '~/presentation/helpers';

// Types
import { AppointmentModel } from '~/domain/models';
import { makeRemoteGetAppointments } from '~/main/factories/usecases';
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function useAppointmentsScreenViewController() {
  const [appointments, setAppointments] = useState<AppointmentModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation<StackNavigation>();

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    const remoteGetAppointments = makeRemoteGetAppointments();

    try {
      const response = await remoteGetAppointments.execute();
      setIsLoading(false);
      setAppointments(response.data);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    void fetchAppointments();
  }, [fetchAppointments]);

  function goToAppointmentDetailsScreen(id: number) {
    return navigation.navigate(routes.AppointmentDetailsScreen, { id });
  }

  function keyExtractor(item: AppointmentModel) {
    return item.id.toString();
  }

  function formatTime(date: string) {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    const formattedHour = hours < 10 ? addZeroToLeft(hours) : hours.toString();
    const formattedMinutes = minutes < 10 ? addZeroToLeft(minutes) : minutes.toString();

    return `${formattedHour}:${formattedMinutes}`;
  }

  return {
    appointments,
    theme,
    keyExtractor,
    goToAppointmentDetailsScreen,
    isLoading,
    hasError,
    fetchAppointments,
    formatTime,
  };
}
