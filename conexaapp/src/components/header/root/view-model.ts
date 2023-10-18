import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';

interface RootViewModel {
  onPress: () => void;
}

function useRootViewModel(): RootViewModel {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function onPress() {
    navigation.navigate('home');
  }

  return {
    onPress,
  };
}

export {useRootViewModel};
