import { useCallback, useEffect } from 'react'

import { Header } from '@components/layout/Header'
import { Container, Mandatory, Title } from './styles'

import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useDate } from '@hooks/useDate'

import { NewAppointmentForm } from './NewAppointmentForm'
import { createAppointment } from '@store/actions/appointment.actions'

import { AppointmentFormValues } from '@schemas/appointmentSchema'
import { useNavigation } from '@react-navigation/native'

export function NewAppointment() {
  const loading = useAppSelector((state) => state.appointment.loading)
  const success = useAppSelector((state) => state.appointment.success)

  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  const date = useDate()

  const handleAppointment = useCallback(
    async (formValues: AppointmentFormValues) => {
      const formatDate = formValues.appointmentDate.split('/')
      const formattedDate = `${formatDate[2].split(' ')[0]}-${formatDate[1]}-${
        formatDate[0]
      } ${formatDate[2].split(' ')[1]}`

      formValues.appointmentDate = date(formattedDate).toISOString()

      dispatch(createAppointment(formValues))
    },
    [date, dispatch],
  )

  useEffect(() => {
    if (success) {
      navigation.goBack()
    }
  }, [navigation, success])

  return (
    <>
      <Header buttonBack title="Nova consulta" />

      <Container>
        <Title>Preencha as informações da consulta</Title>
        <Mandatory>* Campos obrigatórios</Mandatory>

        <NewAppointmentForm onSubmit={handleAppointment} loading={loading} />
      </Container>
    </>
  )
}
