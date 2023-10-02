import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, FlatList } from 'react-native';
import { AppointmentButtonCard } from '~/presentation/components/buttons';
import { Heading } from '~/presentation/components/heading';

// Styles
import {
  ActivityIndicatorContainer,
  AppointmentsButtonCardContainer,
  HeaderContainer,
  Footer,
} from './styles';
import { useTheme } from 'styled-components';

// Types
import { AppointmentModel } from '~/domain/models';
import { makeRemoteGetAppointments } from '~/main/factories/usecases';
import { ErrorScreen, EmptyList } from '~/presentation/components';
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function AppointmentsScreen() {
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

  function renderItem({ item }: { item: AppointmentModel }) {
    return (
      <AppointmentsButtonCardContainer>
        <AppointmentButtonCard
          patient={item.paciente}
          date={item.dataConsulta}
          time={item.dataConsulta}
          observation={item.observacao}
          onPress={() => goToAppointmentDetailsScreen(item.id)}
        />
      </AppointmentsButtonCardContainer>
    );
  }

  function renderEmptyComponent() {
    return <EmptyList />;
  }

  function renderHeader() {
    return (
      <HeaderContainer>
        <Heading type="H1">Minhas Consultas</Heading>
      </HeaderContainer>
    );
  }

  function renderFooter() {
    return <Footer />;
  }

  if (isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </ActivityIndicatorContainer>
    );
  }

  if (hasError) {
    return <ErrorScreen onPressTryAgain={fetchAppointments} />;
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={keyExtractor}
        data={appointments}
        contentContainerStyle={{
          paddingTop: theme.metrics.headerSpace,
          paddingHorizontal: theme.metrics.screenPaddingHorizontal,
          paddingVertical: theme.metrics.space,
        }}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyComponent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
