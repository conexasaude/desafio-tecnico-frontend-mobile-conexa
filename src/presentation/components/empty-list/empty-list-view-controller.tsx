import { routes } from '~/presentation/navigation/routes';
import { useNavigation } from '@react-navigation/native';

// Types
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function useEmptyListViewController() {
  const navigation = useNavigation<StackNavigation>();

  function goToCreateAppointmentScreen() {
    navigation.navigate(routes.CreateAppointmentScreen);
  }

  return { goToCreateAppointmentScreen };
}
