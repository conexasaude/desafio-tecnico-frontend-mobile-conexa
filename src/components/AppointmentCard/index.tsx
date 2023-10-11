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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface AppointmentCardProps {
  patient: string
  date: string
  hour: string
  onPress: () => void
}

export function AppointmentCard({
  patient,
  date,
  hour,
  onPress,
}: AppointmentCardProps) {
  const { COLORS } = useTheme()

  return (
    <Container onPress={onPress}>
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
