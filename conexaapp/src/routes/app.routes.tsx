import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Appointment} from '@screens/appointment/view';
import {CreateAppointment} from '@screens/create-appointment/view';
import {Home} from '@screens/home/view';

type AppRoutes = {
  home: undefined;
  appointment: {
    id: number;
  };
  'create-appointment': undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="appointment" component={Appointment} />
      <Screen name="create-appointment" component={CreateAppointment} />
    </Navigator>
  );
}
