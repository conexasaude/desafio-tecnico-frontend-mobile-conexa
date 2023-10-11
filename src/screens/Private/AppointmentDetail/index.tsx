import { useCallback, useEffect } from 'react'

import { Header } from '@components/layout/Header'

import { Container, Subtitle, Title } from './styles'

import { useAppDispatch } from '@hooks/useAppDispatch'
import { fetchAppointmentById } from '@store/actions/appointment.actions'
import { useAppSelector } from '@hooks/useAppSelector'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { useDate } from '@hooks/useDate'

type StackParamsList = {
  details: { id: number }
}

export function AppointmentDetail() {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const appointment = useAppSelector((state) => state.appointment.appointment)
  const date = useDate()

  const { params } = useRoute<RouteProp<StackParamsList, 'details'>>()
  const { id } = params

  const getAppointmentById = useCallback(() => {
    dispatch(fetchAppointmentById(id))
  }, [dispatch, id])

  useEffect(() => {
    getAppointmentById()
  }, [getAppointmentById])

  return (
    <>
      <Header
        buttonBack
        title="Detalhes da consulta"
        onIconPress={() => navigation.goBack()}
      />

      <Container>
        <Title>Nome do paciente: </Title>
        <Subtitle>{appointment?.paciente}</Subtitle>

        <Title>Data da consulta: </Title>
        <Subtitle>
          {date(appointment?.dataConsulta).format('DD/MM/YYYY HH:mm')}
        </Subtitle>

        <Title>Observação: </Title>
        <Subtitle>{appointment?.observacao}</Subtitle>
      </Container>
    </>
  )
}
