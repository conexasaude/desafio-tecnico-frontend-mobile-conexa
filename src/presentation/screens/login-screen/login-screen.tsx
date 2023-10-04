import React from 'react';
import { Controller } from 'react-hook-form';

// Components
import { InputErrorMessage, TextInput } from '~/presentation/components/inputs';
import { MainButton } from '~/presentation/components/buttons';
import { HelperText } from 'react-native-paper';

// Hooks
import { useLoginScreenViewController } from './login-screen-view-controller';

// Styles
import { ScreenContainer, StyledImage, Header } from './styles';
import { Heading } from '~/presentation/components';

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    handleLogin,
    hasAuthenticationFailed,
    isMainButtonDisabled,
    isLoading,
    emailValidation,
    hasEmailError,
  } = useLoginScreenViewController();
  const conexaSaudeLogo = '../../../../assets/images/conexa-saude-logo.png';

  return (
    <ScreenContainer>
      <Header>
        <StyledImage source={require(conexaSaudeLogo)} alt="Lista vazia" />
        <Heading type="H2">Bem vindo! Utilize seu e-mail e senha para logar</Heading>
      </Header>
      <Controller
        control={control}
        rules={{
          required: true,
          validate: {
            validateEmail: (value: string) => emailValidation(value),
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              label="Email"
              value={value.toLowerCase()}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            <InputErrorMessage isVisible={hasEmailError} errorMessage="Forneça um email válido" />
          </>
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Senha"
            value={value}
            onChangeText={onChange}
            hideText={true}
            onBlur={onBlur}
          />
        )}
        name="password"
      />

      <MainButton
        onPress={handleSubmit(handleLogin)}
        isLoading={isLoading}
        buttonText="Entrar"
        isDisabled={isMainButtonDisabled}
      />

      <HelperText type="error" visible={hasAuthenticationFailed}>
        Algo deu errado, tente novamente mais tarde
      </HelperText>
    </ScreenContainer>
  );
}
