import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { Container, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean
  title: string
}

export function Button({ loading, title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  )
}
