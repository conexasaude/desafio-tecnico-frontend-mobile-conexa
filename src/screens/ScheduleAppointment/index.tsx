import React, { useCallback } from 'react';
import * as Styled from './styles';
import { Input } from '@/components/Input';
import { DatePicker } from '@/components/DatePicker';
import { Button } from '@/components/Button';
import appointmentSchema, {
  FormScheduleAppointment,
} from '@/validations/appointment';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';
import { createAppointment } from '@/store/thunks/appointment.thunk';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { NavPropsLogged } from '@/routes/logged';

export function ScheduleAppointmentScreen() {
  const { show } = useToast();
  const { loading } = useReduxSelector(state => state.appointment);
  const { navigate } = useNavigation<NavPropsLogged>();
  const dispatch = useReduxDispatch();

  const initialValues = {
    patient: '',
    date: '',
    time: '',
    observation: '',
  };

  const onSubmit = useCallback(
    async (data: FormScheduleAppointment) => {
      dispatch(
        createAppointment({
          data,
          onError: show,
          onSuccess: () => navigate('Appointments'),
        }),
      );
    },
    [dispatch, navigate, show],
  );

  const { handleChange, handleSubmit, values, errors, submitCount } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: toFormikValidationSchema(appointmentSchema),
    },
  );

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.Description>
          Preencha os campos abaixo para agendar uma consulta com o paciente
        </Styled.Description>

        <Styled.Form>
          <Input
            testID="input-patient"
            label="Nome do paciente"
            placeholder="Ex: João da silva"
            value={values.patient}
            onChangeText={handleChange('patient')}
            error={submitCount && errors.patient ? errors.patient : ''}
          />
          <Styled.Row>
            <DatePicker
              testID="date-picker-date"
              label="Data"
              mode="date"
              onChange={handleChange('date')}
              error={submitCount && errors.date ? errors.date : ''}
            />

            <DatePicker
              testID="date-picker-time"
              label="Hora"
              mode="time"
              onChange={handleChange('time')}
              error={submitCount && errors.time ? errors.time : ''}
            />
          </Styled.Row>

          <Input
            testID="input-observation"
            label="Observação"
            placeholder="..."
            textArea
            value={values.observation}
            onChangeText={handleChange('observation')}
            error={submitCount && errors.observation ? errors.observation : ''}
          />
        </Styled.Form>

        <Styled.Spacer />

        <Button
          title="Agendar"
          onPress={() => handleSubmit()}
          loading={loading}
        />
      </Styled.Container>
    </Styled.SafeArea>
  );
}
