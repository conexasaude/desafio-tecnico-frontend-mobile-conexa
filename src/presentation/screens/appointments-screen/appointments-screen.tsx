import React from 'react';

// Helpers
import { formatDate } from '~/presentation/helpers';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, FlatList } from 'react-native';
import { AppointmentButtonCard } from '~/presentation/components/buttons';
import { Heading } from '~/presentation/components/heading';
import { ErrorScreen, EmptyList } from '~/presentation/components';

// Styles
import {
  ActivityIndicatorContainer,
  AppointmentsButtonCardContainer,
  HeaderContainer,
  Footer,
} from './styles';

// Types
import { AppointmentModel } from '~/domain/models';
import { useAppointmentsScreenViewController } from './appointments-screen-view-controller';

export function AppointmentsScreen() {
  const {
    appointments,
    theme,
    keyExtractor,
    goToAppointmentDetailsScreen,
    isLoading,
    hasError,
    fetchAppointments,
    formatTime,
  } = useAppointmentsScreenViewController();

  function renderItem({ item }: { item: AppointmentModel }) {
    const { dataConsulta } = item;
    const formattedTime = formatTime(dataConsulta);
    const formattedDate = formatDate(dataConsulta);

    return (
      <AppointmentsButtonCardContainer>
        <AppointmentButtonCard
          patient={item.paciente}
          date={formattedDate}
          time={formattedTime}
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
