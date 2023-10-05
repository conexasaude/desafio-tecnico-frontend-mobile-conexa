import { ButtonText, Container, Header, HeaderText, LogoutButton, LogoutButtonContainer, OptionCardContainer, OptionsContainer, OptionText } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import RootStackParamList from '../../types/rootStackParamList';
import OptionCard from '../../components/OptionCard';
import { useUser } from '../../hooks/useUser';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { user, logout } = useUser()

  async function backToLogin() {
    try {
      navigation.navigate('Login')
      await logout()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container>
			<Header>
        <HeaderText>Bem-vindo(a) {user!.nome}!</HeaderText>
      </Header>
      
      <OptionText>Escolha uma das opções abaixo:</OptionText>
      <OptionsContainer>
        <OptionCardContainer>
          <OptionCard
            onPress={() => navigation.navigate('AppointmentList')}
            text='Lista de consultas'
            icon={<MaterialCommunityIcons name="clipboard-list" size={36} color="#FFF" />}
          />
          <OptionCard
            onPress={() => navigation.navigate('NewAppointment')}
            text='Nova consulta'
            icon={<MaterialCommunityIcons name="clipboard-plus" size={36} color="#FFF" />}
          />
        </OptionCardContainer>

        <LogoutButtonContainer>
          <LogoutButton onPress={backToLogin}>
            <ButtonText>Sair</ButtonText>
          </LogoutButton>
        </LogoutButtonContainer>
      </OptionsContainer>
    </Container>
  );
}
