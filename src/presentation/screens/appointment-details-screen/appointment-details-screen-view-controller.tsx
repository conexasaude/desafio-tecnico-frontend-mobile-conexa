import { useState } from 'react';
import { useTheme } from 'styled-components';

// Helpers
import { addZeroToLeft, formatDate } from '~/presentation/helpers';

// Types
import { AppointmentModel } from '~/domain/models';

export function useAppointmentDetailsScreenViewController() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [patientInfo, setPatientInfo] = useState<AppointmentModel>({});
  const theme = useTheme();

  function formatTime(date: string) {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    const formattedHour = hours < 10 ? addZeroToLeft(hours) : hours.toString();
    const formattedMinutes = minutes < 10 ? addZeroToLeft(minutes) : minutes.toString();

    return `${formattedHour}:${formattedMinutes}`;
  }

  const formattedDate = formatDate(patientInfo.dataConsulta);
  const formattedTime = formatTime(patientInfo.dataConsulta);

  return {
    formattedDate,
    formattedTime,
    hasError,
    isLoading,
    theme,
    patientInfo,
    setIsLoading,
    setHasError,
    setPatientInfo,
  };
}
