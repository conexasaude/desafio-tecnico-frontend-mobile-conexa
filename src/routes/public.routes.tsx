import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'
import { SignIn } from '@screens/Public/SignIn'

type PublicRoutes = {
  SignIn: undefined
}

export type PublicRoutesProps = StackNavigationProp<PublicRoutes>

export function PublicRoutes() {
  const { Navigator, Screen } = createStackNavigator<PublicRoutes>()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}
