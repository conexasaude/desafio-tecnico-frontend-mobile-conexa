import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';
import { makeRemoteAuthentication } from '~/main/factories/usecases';

// Adapters
import { setCurrentAccountAdapter } from '~/main/adapters';

// Components
import { InputErrorMessage, TextInput } from '~/presentation/components/inputs';
import { MainButton } from '~/presentation/components/buttons';
import { HelperText } from 'react-native-paper';

// Styles
import { ScreenContainer } from './styles';

// Types
import { LoginFormInterface } from './types';
import { StackNavigation } from '~/presentation/navigation/navigators/types';

// Validators
import { emailValidation } from '~/presentation/validators';

export function LoginScreen() {
  const [hasAuthenticationFailed, setHasAuthenticationFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInterface>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation<StackNavigation>();
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const hasEmailError = errors.email?.type === 'validateEmail';
  const isMainButtonDisabled = emailValue === '' || passwordValue === '' || hasEmailError;

  async function handleLogin(data: LoginFormInterface) {
    setIsLoading(true);
    setHasAuthenticationFailed(false);
    const remoteAuthentication = makeRemoteAuthentication();

    try {
      const response = await remoteAuthentication.execute(data);

      await setCurrentAccountAdapter(response.data);
      setIsLoading(false);
      navigation.navigate(routes.HomeScreen);
    } catch (error) {
      setIsLoading(false);
      setHasAuthenticationFailed(true);
    }
  }

  return (
    <ScreenContainer>
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
