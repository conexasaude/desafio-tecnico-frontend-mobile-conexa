import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';
import { makeRemoteAuthentication } from '~/main/factories/usecases';

// Adapters
import { setCurrentAccountAdapter } from '~/main/adapters';

// Validators
import { emailValidation } from '~/presentation/validators';

// Types
import { LoginFormInterface } from './types';
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function useLoginScreenViewController() {
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
  const isMainButtonDisabled =
    emailValue === '' || passwordValue === '' || hasEmailError || isLoading;

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

  return {
    control,
    handleSubmit,
    handleLogin,
    hasAuthenticationFailed,
    isMainButtonDisabled,
    isLoading,
    emailValidation,
    hasEmailError,
  };
}
