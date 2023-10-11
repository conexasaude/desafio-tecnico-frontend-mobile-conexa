import { NavigationContainer } from '@react-navigation/native'
import { PublicRoutes } from './public.routes'
import { useAppSelector } from '@hooks/useAppSelector'
import { PrivateRoutes } from './private.routes'

export function Routes() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
