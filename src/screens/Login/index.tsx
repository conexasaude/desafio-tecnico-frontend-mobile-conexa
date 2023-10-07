import { useCallback, useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Form, Title } from './styles';
import RootStackParamList from '../../types/rootStackParamList';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import { useUser } from '../../hooks/useUser';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../theme/theme';
import Logo from '../../components/Logo';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { getAuthUser } = useUser();

  async function login() {
    setLoading(true)
    Keyboard.dismiss()
    try {
      await getAuthUser(email, password)

      navigation.navigate('Home')
    } catch (error) {
      Alert.alert('Erro', String(error).replace('Error:', ''))
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEmail('')
        setPassword('')
      };
    }, [])
  )

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
          <Form>
            <Logo />

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