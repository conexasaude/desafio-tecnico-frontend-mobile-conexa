import React, { useCallback, useEffect } from 'react';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { FlatList } from 'react-native';
import { Card } from '@/components/Card';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { NavPropsLogged } from '@/routes/logged';
import { fetchAppointments } from '@/store/thunks/appointment.thunk';
import { useToast } from 'react-native-toast-notifications';
import { Loader } from '@/components/Loader';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import * as Styled from './styles';

export function AppointmentsScreen() {
  const { show } = useToast();
  const { effects } = useTheme();
  const { navigate } = useNavigation<NavPropsLogged>();
  const { appointments, loading, error } = useReduxSelector(
    state => state.appointment,
  );

  const dispatch = useReduxDispatch();

  const getAppointments = useCallback(() => {
    dispatch(fetchAppointments({ onError: show }));
  }, [dispatch, show]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && error) {
    return <ErrorBoundary tryAgain={getAppointments} />;
  }

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.Column>
          <Styled.Title>Painel de Consultas</Styled.Title>
          <Styled.Line />
        </Styled.Column>

        <Styled.Row>
          <Styled.DescriptionList>{`${appointments.length} consulta(s) agendadas`}</Styled.DescriptionList>
          <Styled.ScheduleButton
            title="Agendar Consulta"
            onPress={() => navigate('ScheduleAppointment')}
          />
        </Styled.Row>

        <FlatList
          data={appointments}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Card
              testID="appointment-card"
              title={item.paciente}
              description={item.dataConsulta}
              button={{
                title: 'Ver Detalhes',
                onPress: () => navigate('DetailsAppointment', { id: item.id }),
              }}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: effects.spacing.md }}
        />
      </Styled.Container>
    </Styled.SafeArea>
  );
}
