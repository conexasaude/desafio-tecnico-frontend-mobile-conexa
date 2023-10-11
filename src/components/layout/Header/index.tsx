import { useTheme } from '@emotion/react'

import { Container, ContainerRow, Title } from './styles'

import { useNavigation } from '@react-navigation/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface HeaderProps {
  buttonBack?: boolean
  title: string
  icon?: string
  onIconPress?: () => void
}

export function Header({ buttonBack, title, icon, onIconPress }: HeaderProps) {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  return (
    <Container>
      <ContainerRow>
        <ContainerRow>
          {buttonBack && (
            <MaterialCommunityIcons
              name="chevron-left"
              size={36}
              color={COLORS.WHITE}
              onPress={() => navigation.goBack()}
            />
          )}

          <Title>{title}</Title>
        </ContainerRow>

        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={COLORS.WHITE}
            onPress={onIconPress}
          />
        )}
      </ContainerRow>
    </Container>
  )
}
