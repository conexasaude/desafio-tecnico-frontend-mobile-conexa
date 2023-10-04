import { useCallback, useState } from 'react';
import { View, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useHeaderHeight } from "@react-navigation/elements";
import { Container, Form, SVGContainer, Title } from './styles';
import { useUser } from '../../hooks/UserContext';
import RootStackParamList from '../../types/rootStackParamList';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getAuthUser } = useUser();

  async function login() {
    Keyboard.dismiss()
    try {
      await getAuthUser(email, password)
      navigation.navigate('Home')
    } catch (error) {
      alert(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content')

      return () => {
        setEmail('')
        setPassword('')
        StatusBar.setBarStyle('dark-content')
      };
    }, [])
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SVGContainer>
          <SvgUri
            width="100%"
            height="50px"
            uri="https://raw.githubusercontent.com/conexasaude/desafio-tecnico-frontend-mobile-conexa/b2e27512e27c5b718a20c9778719d902bafc989e/img/logo-conexa.svg"
          />
        </SVGContainer>
        
        <Form>
          <Title>Acesse sua conta</Title>
          <Input
            label="Email"
            onChangeText={setEmail}
            value={email}
            placeholder='exemplo@conexa.com'
            autoCapitalize="none"
          />
          <PasswordInput
            onChangeText={setPassword}
            value={password}
            placeholder='Senha'
          />
          <Button
            onPress={login}
            label="Login"
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}