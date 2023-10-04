import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { makeRemoteAuthentication } from '~/main/factories/usecases';

// Adapters
import { setCurrentAccountAdapter } from '~/main/adapters';

// Validators
import { emailValidation } from '~/presentation/validators';

// Types
import { LoginFormInterface } from './types';
import { AuthContext } from '~/presentation/context';

export function useLoginScreenViewController() {
  const { setUser } = useContext(AuthContext);
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
      setUser(response.data);
      setIsLoading(false);
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
