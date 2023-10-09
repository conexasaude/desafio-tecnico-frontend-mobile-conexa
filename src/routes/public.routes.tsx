import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '@screens/Public/SignIn'

export function PublicRoutes() {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}
