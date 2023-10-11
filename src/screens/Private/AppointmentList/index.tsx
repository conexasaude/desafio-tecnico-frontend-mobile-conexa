import { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/layout/Header'
import { AppointmentCard } from '@components/AppointmentCard'

import { useNavigation, useIsFocused } from '@react-navigation/native'
import { PrivateRoutesProps } from '@routes/private.routes'

import { AppointmentContainer, Container } from './styles'

import { useAppDispatch } from '@hooks/useAppDispatch'
import { fetchAppointments } from '@store/actions/appointment.actions'
import { useAppSelector } from '@hooks/useAppSelector'

import { useDate } from '@hooks/useDate'

export function AppointmentList() {
  const isFocused = useIsFocused()
  const dispatch = useAppDispatch()
  const appointments = useAppSelector(
    (state) => state.appointments.appointments,
  )
  const date = useDate()
  const navigation = useNavigation<PrivateRoutesProps>()

  const getAppointments = useCallback(() => {
    dispatch(fetchAppointments())
  }, [dispatch])

  useEffect(() => {
    if (isFocused) {
      getAppointments()
    }
  }, [getAppointments, isFocused])

  return (
    <Container>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          const dateFormat = date(item.dataConsulta.split(' ')[0]).format(
            'DD/MM/YYYY',
          )
          const hour = item.dataConsulta.split(' ')[1]

          return (
            <AppointmentContainer>
              <AppointmentCard
                patient={item.paciente}
                date={dateFormat}
                hour={hour}
                onPress={() =>
                  navigation.navigate('AppointmentDetail', {
                    id: item.id,
                  })
                }
              />
            </AppointmentContainer>
          )
        }}
        data={appointments}
        ListHeaderComponent={<Header title="Consultas" />}
      />
    </Container>
  )
}
