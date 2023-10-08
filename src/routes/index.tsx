import { NavigationContainer } from '@react-navigation/native'
import { PrivateRoutes } from './private.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  )
}
