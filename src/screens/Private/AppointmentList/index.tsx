import { FlatList } from 'react-native'
import { Header } from '@components/layout/Header'
import { AppointmentCard } from '@components/AppointmentCard'
import { Container } from './styles'

export function AppointmentList() {
  const data = [
    {
      patient: 'Diego Senna',
      date: '24/05/2002',
      hour: '10:45',
    },
  ]

  function renderItem({ item }) {
    return (
      <Container>
        <AppointmentCard
          patient={item.patient}
          date={item.date}
          hour={item.hour}
        />
      </Container>
    )
  }

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
      ListHeaderComponent={<Header title="Consultas" />}
    />
  )
}
