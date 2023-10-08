import { ButtonText, Container, Greeting, Header, LogoutButton, LogoutButtonContainer, CardList, OptionsContainer, OptionText, Username } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import RootStackParamList from '../../types/rootStackParamList';
import OptionCard from '../../components/OptionCard';
import { useUser } from '../../hooks/useUser';
import theme from '../../theme/theme';
import { Alert, StatusBar, View } from 'react-native';
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { user, logout } = useUser()

  async function backToLogin() {
    try {
      navigation.navigate('Login')
      await logout()
    } catch (error) {
      Alert.alert('Erro', String(error).replace('Error:', ''))
    }
  }

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content')

      return () => {
        StatusBar.setBarStyle('dark-content')
      };
    }, [])
  )

  return (
    <Container>
			<Header>
        <View>
          <Greeting>Bem-vindo(a)</Greeting>
          <Username>{user!.nome}!</Username>
        </View>

        <View>
          <FontAwesome name="user-circle-o" size={72} color={theme.colors.white} />
        </View>
      </Header>
      
      <OptionsContainer>
        <OptionText>Escolha uma das opções abaixo:</OptionText>

        <CardList>
          <OptionCard
            testID="appointment-card-list"
            onPress={() => navigation.navigate('AppointmentList')}
            text='Lista de consultas'
            icon={<MaterialCommunityIcons name="clipboard-list" size={36} color={theme.colors.white} />}
          />
          <OptionCard
            testID="new-appointment"
            onPress={() => navigation.navigate('NewAppointment')}
            text='Nova consulta'
            icon={<MaterialCommunityIcons name="clipboard-plus" size={36} color={theme.colors.white} />}
          />
        </CardList>

        <LogoutButtonContainer>
          <LogoutButton onPress={backToLogin}>
            <ButtonText>Sair</ButtonText>
          </LogoutButton>
        </LogoutButtonContainer>
      </OptionsContainer>
    </Container>
  );
}
