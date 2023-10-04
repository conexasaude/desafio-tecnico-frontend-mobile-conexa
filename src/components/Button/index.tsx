import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => Promise<void>
  label: string
  disabled?: boolean
}

export default function Login({ label, onPress, disabled }: ButtonProps) {

  return (
    <ButtonContainer onPress={onPress} disabled={disabled}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}