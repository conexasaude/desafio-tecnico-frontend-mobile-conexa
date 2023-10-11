import { useTheme } from '@emotion/react'
import {
  Container,
  ContainerDateHour,
  ContainerRow,
  Date,
  Grid,
  Hour,
  Patient,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { PrivateRoutesProps } from '@routes/private.routes'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface AppointmentCardProps {
  patient: string
  date: string
  hour: string
}

export function AppointmentCard({ patient, date, hour }: AppointmentCardProps) {
  const { COLORS } = useTheme()

  const navigation = useNavigation<PrivateRoutesProps>()

  return (
    <Container onPress={() => navigation.navigate('AppointmentDetail')}>
      <ContainerRow>
        <Grid>
          <Patient>{patient}</Patient>
          <Date>{date}</Date>
        </Grid>

        <ContainerDateHour>
          <Hour>{hour}</Hour>

          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={COLORS.NEUTRAL_GRAY}
          />
        </ContainerDateHour>
      </ContainerRow>
    </Container>
  )
}
