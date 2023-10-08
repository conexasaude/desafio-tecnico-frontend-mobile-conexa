import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '@screens/Private/SignIn'

export function PrivateRoutes() {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}
