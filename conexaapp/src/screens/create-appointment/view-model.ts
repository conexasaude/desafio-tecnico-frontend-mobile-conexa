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
import {UserModel} from '@models/user.model';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import dayjs from 'dayjs';
import {DateMap} from '@mappers/date.map';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import {createAppointment} from '@infra/http/repositories/appointment.repository';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Sao_Paulo');

const createAppointmentSchema = yup.object({
  patient: yup.string().required('Campo obrigatório.'),
  date: yup.string().required('Campo obrigatório.'),
  hour: yup.string().required('Campo obrigatório.'),
  description: yup.string().required('Campo obrigatório.'),
});

type FormDataProps = yup.InferType<typeof createAppointmentSchema> &
  FieldValues;

export interface CreateAppointmentViewModel {
  user: UserModel;
  control: Control<FormDataProps>;
  errors: FieldErrors<FormDataProps>;
  handleSubmit: UseFormHandleSubmit<FormDataProps>;
  handleCreate: ({
    patient,
    date,
    hour,
    description,
  }: FormDataProps) => Promise<void>;
  handleGoBack: () => void;
}

function useCreateAppointmentViewModel(): CreateAppointmentViewModel {
  const {goBack, reset} = useNavigation<AppNavigatorRoutesProps>();
  const {user} = useAuthContext();
  const {setIsLoading, onOpenDialog} = useAppContext();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(createAppointmentSchema),
  });

  async function handleCreate({
    patient,
    date,
    hour,
    description,
  }: FormDataProps) {
    const dateServer = DateMap.toServer(date);
    const convertedDate = dayjs(dateServer, 'YYYY/MM/DD');
    const currentDate = dayjs().format('YYYY/MM/DD');
    const isDateInPast = convertedDate.isBefore(currentDate);
    const isSameDate = convertedDate.isSame(currentDate);

    const now = dayjs();
    const hourDayjs = dayjs(
      `${convertedDate.format('YYYY/MM/DD')} ${hour}`,
      'YYYY/MM/DD HH:mm',
    );
    const isSameHour = hourDayjs.isSame(now);
    const isHourInPast = hourDayjs.isBefore(now);

    if (isDateInPast) {
      onOpenDialog({
        title: 'Erro',
        message: 'A data não pode ser inferior à data atual.',
      });
      return;
    }

    if (isSameDate && (isHourInPast || isSameHour)) {
      onOpenDialog({
        title: 'Erro',
        message: 'A hora não pode ser inferior à hora atual.',
      });
      return;
    }

    try {
      setIsLoading(true);
      await createAppointment({
        idMedico: 12,
        paciente: patient,
        dataConsulta: `${dateServer}T${hour}`,
        observacao: description,
      });

      setIsLoading(false);
      onOpenDialog({
        title: 'Sucesso',
        message: `Agendamento Efetuado com sucesso!\nO paciente ${patient} está agendado para ${date} às ${hour}.`,
      });
      reset({
        index: 0,
        routes: [{name: 'home'}],
      });
    } catch (error) {
      onOpenDialog({message: error.message, title: 'Erro'});
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    goBack();
  }

  return {
    user,
    control,
    errors,
    handleSubmit,
    handleCreate,
    handleGoBack,
  };
}

export {useCreateAppointmentViewModel};
