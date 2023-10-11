import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'
import { TabRoutes } from './tab.routes'
import { AppointmentDetail } from '@screens/Private/AppointmentDetail'
import { NewAppointment } from '@screens/Private/NewAppointment'

type PrivateRoutes = {
  Tabs: {
    screen: string
  }
  AppointmentDetail: undefined
  NewAppointment: undefined
}

export type PrivateRoutesProps = StackNavigationProp<PrivateRoutes>

export function PrivateRoutes() {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Tabs" component={TabRoutes} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Screen name="NewAppointment" component={NewAppointment} />
    </Navigator>
  )
}
