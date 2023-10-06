import { useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Form, SVGContainer, Title } from './styles';
import RootStackParamList from '../../types/rootStackParamList';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import { useUser } from '../../hooks/useUser';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const { getAuthUser } = useUser();

  async function login() {
    setLoading(true)
    Keyboard.dismiss()
    try {
      navigation.navigate('Home')
      await getAuthUser(email, password)
    } catch (error) {
      Alert.alert('Erro', String(error).replace('Error:', ''))
    }
    setLoading(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Spinner
          visible={loading}
          textContent={'Carregando...'}
          textStyle={{color: theme.colors.white}}
        />
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
              testID="login-button"
              onPress={login}
              label="Login"
            />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}