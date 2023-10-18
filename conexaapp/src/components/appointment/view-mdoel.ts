import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';

interface handlePressProps {
  id: number;
}

export interface AppointmentViewModel {
  handlePress: (value: handlePressProps) => Promise<void>;
}

function useAppointmentViewModel(): AppointmentViewModel {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  async function handlePress({id}: handlePressProps) {
    navigate('appointment', {id});
  }

  return {
    handlePress,
  };
}

export {useAppointmentViewModel};
