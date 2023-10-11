import { useCallback, useEffect } from 'react'

import { useTheme } from '@emotion/react'

import { Touchable, Container, ContainerRow, SeeMore, Title } from './styles'

import { useIsFocused, useNavigation } from '@react-navigation/native'
import { PrivateRoutesProps } from '@routes/private.routes'

import { Button } from '@components/Button'
import { Header } from '@components/layout/Header'
import { Card } from '@components/Card'
import { AppointmentCard } from '@components/AppointmentCard'

import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { logout } from '@store/actions/auth.actions'
import { fetchAppointments } from '@store/actions/appointment.actions'

import { useDate } from '@hooks/useDate'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function Home() {
  const { COLORS } = useTheme()

  const navigation = useNavigation<PrivateRoutesProps>()

  const dispatch = useAppDispatch()
  const date = useDate()
  const isFocused = useIsFocused()

  const user = useAppSelector((state) => state.auth.user)
  const appointments = useAppSelector(
    (state) => state.appointments.appointments,
  )

  const getAppointments = useCallback(() => {
    dispatch(fetchAppointments())
  }, [dispatch])

  useEffect(() => {
    if (isFocused) {
      getAppointments()
    }
  }, [getAppointments, isFocused])

  return (
    <>
      <Header
        title={`Olá, ${user?.nome}`}
        icon="exit-to-app"
        onIconPress={() => dispatch(logout())}
      />

      <Container>
        <Card>
          <ContainerRow>
            <Title>Consultas agendadas</Title>

            <Touchable
              onPress={() =>
                navigation.navigate('Tabs', {
                  screen: 'AppointmentList',
                })
              }>
              <SeeMore>Ver mais</SeeMore>

              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={COLORS.NEUTRAL_GRAY}
              />
            </Touchable>
          </ContainerRow>

          {appointments?.slice(0, 3).map((item) => {
            const dateFormat = date(item.dataConsulta.split(' ')[0]).format(
              'DD/MM/YYYY',
            )
            const hour = item.dataConsulta.split(' ')[1]

            return (
              <AppointmentCard
                patient={item.paciente}
                date={dateFormat}
                hour={hour}
                onPress={() =>
                  navigation.navigate('AppointmentDetail', {
                    id: item.id,
                  })
                }
                key={item.id}
              />
            )
          })}
        </Card>

        <Button
          title="Nova consulta"
          onPress={() => navigation.navigate('NewAppointment')}
        />
      </Container>
    </>
  )
}
