import React, { useCallback } from 'react';
import * as Styled from './styles';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { useTheme } from '@emotion/react';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useFormik } from 'formik';
import { useToast } from 'react-native-toast-notifications';
import { login } from '@/store/thunks/user.thunk';
import loginSchema, { FormLogin } from '@/validations/login';

export function LoginScreen() {
  const { effects } = useTheme();
  const { show } = useToast();
  const { loading } = useReduxSelector(slices => slices.user);

  const dispatch = useReduxDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = useCallback(
    async (data: FormLogin) => {
      dispatch(login({ data, onError: show }));
    },
    [dispatch, show],
  );

  const { handleChange, handleSubmit, values, errors, submitCount } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: toFormikValidationSchema(loginSchema),
    },
  );

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.Spacer flex={1} />
        <Styled.LogoConexa />
        <Styled.Spacer flex={2} />
        <Styled.Title>Faça Login</Styled.Title>

        <Styled.Form>
          <Input
            testID="input-email"
            label="E-mail"
            placeholder="Ex: jose@email.com"
            value={values.email.toLowerCase()}
            onChangeText={handleChange('email')}
            error={submitCount && errors.email ? errors.email : ''}
          />

          <Input
            testID="input-password"
            label="Senha"
            placeholder="*************"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            error={submitCount && errors.password ? errors.password : ''}
            wrapperStyle={{ marginBottom: effects.spacing.hg }}
          />

          <Button
            title="Entrar"
            onPress={() => handleSubmit()}
            loading={loading}
          />
        </Styled.Form>
        <Styled.Spacer flex={3} />
      </Styled.Container>
    </Styled.SafeArea>
  );
}
