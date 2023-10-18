import {useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Control,
  FieldErrors,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
} from 'react-hook-form';
import {useAuthContext} from '@hooks/use-auth.hook';
import {useAppContext} from '@hooks/use-app.hook';

const signInSchema = yup.object({
  email: yup.string().required('Informe o email.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.'),
});

type FormDataProps = yup.InferType<typeof signInSchema> & FieldValues;

export interface SignInViewModel {
  control: Control<FormDataProps>;
  handleSubmit: UseFormHandleSubmit<FormDataProps>;
  errors: FieldErrors<FormDataProps>;
  passwordSecureTextEntry: boolean;
  handleSignIn: ({password, email}: FormDataProps) => Promise<void>;
  handlePasswordSecureTextEntry: () => void;
}

function useSignInViewModel(): SignInViewModel {
  const {signInUser} = useAuthContext();
  const {setIsLoading, onOpenDialog} = useAppContext();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);

  async function handleSignIn({password, email}: FormDataProps) {
    try {
      setIsLoading(true);
      await signInUser(email, password);
    } catch (error) {
      onOpenDialog({message: error.message, title: 'Erro'});
      setIsLoading(false);
    }
  }

  function handlePasswordSecureTextEntry() {
    setPasswordSecureTextEntry(prev => !prev);
  }

  return {
    control,
    errors,
    passwordSecureTextEntry,
    handleSubmit,
    handleSignIn,
    handlePasswordSecureTextEntry,
  };
}

export {useSignInViewModel};
