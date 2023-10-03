import React, { useState, useCallback, useEffect } from 'react';

// Components
import { ActivityIndicator } from 'react-native';
import { makeRemoteGetAppointmentsById } from '~/main/factories/usecases';
import { Heading } from '~/presentation/components/heading';

// Helpers
import { addZeroToLeft, formatDate } from '~/presentation/helpers';

// Styles
import {
  AppointmentDetailsCardContainer,
  ActivityIndicatorContainer,
  Column,
  Row,
  ScreenContainer,
  StyledImage,
} from './styles';
import { useTheme } from 'styled-components';

// Types
import { AppointmentModel } from '~/domain/models';
import { ErrorScreen } from '~/presentation/components';

export function AppointmentDetailsScreen({ route }: any) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [patientInfo, setPatientInfo] = useState<AppointmentModel>({});
  const theme = useTheme();
  const patientAvatarImageSource = '../../../../assets/images/patient-avatar-image.png';
  const { params } = route;

  const fetchAppointmentById = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    const remoteGetAppointmentsById = makeRemoteGetAppointmentsById(params.id);

    try {
      const response = await remoteGetAppointmentsById.execute();
      setIsLoading(false);
      setPatientInfo(response.data);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }, [params.id]);

  useEffect(() => {
    void fetchAppointmentById();
  }, [fetchAppointmentById]);

  if (isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </ActivityIndicatorContainer>
    );
  }

  if (hasError) {
    return <ErrorScreen onPressTryAgain={fetchAppointmentById} />;
  }

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

  return (
    <ScreenContainer>
      <AppointmentDetailsCardContainer>
        <Row>
          <StyledImage source={require(patientAvatarImageSource)} />

          <Column>
            <Row>
              <Heading type="H2">Nome: </Heading>
              <Heading type="H3">{patientInfo?.paciente}</Heading>
            </Row>
            <Row>
              <Heading type="H2">Data: </Heading>
              <Heading type="H3">{formattedDate}</Heading>
            </Row>
            <Row>
              <Heading type="H2">Horário: </Heading>
              <Heading type="H3">{formattedTime}</Heading>
            </Row>
            <Row>
              <Heading type="H2">OBS: </Heading>
              <Heading type="H3">{patientInfo.observacao}</Heading>
            </Row>
          </Column>
        </Row>
      </AppointmentDetailsCardContainer>
    </ScreenContainer>
  );
}
