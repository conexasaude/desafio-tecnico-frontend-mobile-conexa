import { useTheme } from '@emotion/react'
import { Touchable, Container, ContainerRow, SeeMore, Title } from './styles'
import { Card } from '@components/Card'
import { AppointmentCard } from '@components/AppointmentCard'
import { Header } from '@components/layout/Header'
import { useNavigation } from '@react-navigation/native'
import { PrivateRoutesProps } from '@routes/private.routes'
import { Button } from '@components/Button'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { logout } from '@store/actions/auth.actions'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function Home() {
  const { COLORS } = useTheme()

  const navigation = useNavigation<PrivateRoutesProps>()
  const dispatch = useAppDispatch()

  const data = [
    {
      id: 1,
      patient: 'Diego Senna',
      date: '24/05/2002',
      hour: '10:45',
    },
  ]

  return (
    <>
      <Header
        title="Olá, Daniel!"
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

          {data.map((item) => (
            <AppointmentCard
              patient={item.patient}
              date={item.date}
              hour={item.hour}
              key={item.id}
            />
          ))}
        </Card>

        <Button
          title="Nova consulta"
          onPress={() => navigation.navigate('NewAppointment')}
        />
      </Container>
    </>
  )
}
