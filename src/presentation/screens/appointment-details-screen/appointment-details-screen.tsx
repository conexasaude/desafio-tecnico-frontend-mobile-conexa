import React, { useCallback, useEffect } from 'react';
import { makeRemoteGetAppointmentsById } from '~/main/factories/usecases';

// Components
import { ActivityIndicator } from 'react-native';
import { Heading } from '~/presentation/components/heading';
import { ErrorScreen } from '~/presentation/components';

// Styles
import {
  AppointmentDetailsCardContainer,
  ActivityIndicatorContainer,
  Column,
  Row,
  ScreenContainer,
  StyledImage,
} from './styles';

// Types
import { useAppointmentDetailsScreenViewController } from './appointment-details-screen-view-controller';

export function AppointmentDetailsScreen({ route }: any) {
  const { id } = route.params;
  const patientAvatarImageSource = '../../../../assets/images/patient-avatar-image.png';

  const {
    formattedDate,
    formattedTime,
    hasError,
    isLoading,
    theme,
    patientInfo,
    setIsLoading,
    setHasError,
    setPatientInfo,
  } = useAppointmentDetailsScreenViewController();

  const fetchAppointmentById = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    const remoteGetAppointmentsById = makeRemoteGetAppointmentsById(id);

    try {
      const response = await remoteGetAppointmentsById.execute();
      setIsLoading(false);
      setPatientInfo(response.data);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }, [id, setHasError, setIsLoading, setPatientInfo]);

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
