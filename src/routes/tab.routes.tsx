import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Private/Home'
import { AppointmentList } from '@screens/Private/AppointmentList'
import { useTheme } from '@emotion/react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type TabRoutes = {
  Home: undefined
  AppointmentList: undefined
}

export type TabNavigatorRouterProps = BottomTabNavigationProp<TabRoutes>

export function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator()
  const { COLORS, FONT_FAMILY } = useTheme()

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'AppointmentList') {
            iconName = focused ? 'calendar-check' : 'calendar-check-outline'
          }

          if (iconName) {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.BOLD,
          fontSize: 14,
        },
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Screen component={Home} name="Home" />

      <Screen
        options={{
          title: 'Consultas',
        }}
        component={AppointmentList}
        name="AppointmentList"
      />
    </Navigator>
  )
}
