import {Platform, ScrollView} from 'react-native';
import {
  Form,
  FormContainer,
  FormTitle,
  PasswordButton,
  KeyboardAvoidingView,
  Logo,
} from './styles';
import {Button} from '@components/button/view';
import {useSignInViewModel} from './view-model';
import EyeCloseSvg from '@assets/eye-close.svg';
import EyeOpenSvg from '@assets/eye-open.svg';
import {InputForm} from '@components/form/input-form/view';
import {Container} from '@components/container/view';
import {Header} from '@components/header';

export function SignIn() {
  const {
    control,
    handleSubmit,
    errors,
    handleSignIn,
    passwordSecureTextEntry,
    handlePasswordSecureTextEntry,
  } = useSignInViewModel();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <Container>
          <Header.Root>
            <Header.VStack>
              <Logo />
              <Header.Title>Conecte-se à sua saúde</Header.Title>
            </Header.VStack>
          </Header.Root>

          <FormContainer>
            <Form>
              <FormTitle>Acesse sua conta</FormTitle>
              <InputForm
                control={control}
                name="email"
                placeholder="jose@gmail.com"
                autoCapitalize="none"
                autoCorrect={false}
                error={errors.email && String(errors.email.message)}
                label="E-mail"
              />
              <InputForm
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite aqui sua senha"
                autoCapitalize="none"
                error={errors.password && String(errors.password.message)}
                secureTextEntry={passwordSecureTextEntry}
                rightElement={
                  <PasswordButton onPress={handlePasswordSecureTextEntry}>
                    {passwordSecureTextEntry ? (
                      <EyeCloseSvg width={20} height={20} />
                    ) : (
                      <EyeOpenSvg width={20} height={20} />
                    )}
                  </PasswordButton>
                }
              />

              <Button
                title="Acessar conta"
                onPress={handleSubmit(handleSignIn)}
                variant="outline"
              />
            </Form>
          </FormContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
