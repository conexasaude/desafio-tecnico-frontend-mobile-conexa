import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

// Components
import { DatePickerInput, TextInput, TimePickerInput } from '~/presentation/components/inputs';
import { MainButton } from '~/presentation/components/buttons';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { HelperText, Snackbar } from 'react-native-paper';

// Helpers
import { addZeroToLeft, formatDate, formatTime } from '~/presentation/helpers';

// Styles
import { ScreenContainer, SnackBarContainer } from './styles';

// Types
import { CreateAppointmentFormInterface, TimeInterface } from './types';
import { makeRemoteCreateAppointment } from '~/main/factories/usecases';

export function CreateAppointmentScreen() {
  const [rawDate, setRawDate] = useState(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [time, setTime] = useState('');
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCreateAppointmentFailed, setHasCreateAppointmentFailed] = useState(false);
  const { control, handleSubmit, reset, watch } = useForm<CreateAppointmentFormInterface>({
    defaultValues: {
      paciente: '',
      observacao: '',
    },
  });
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const date = formatDate(rawDate);
  const pacienteValue = watch('paciente');
  const observacao = watch('observacao');
  const isTimeFieldEmpty = time === '';
  const isMainButtonDisabled = pacienteValue === '' || observacao === '' || isTimeFieldEmpty;

  function resetInputs() {
    reset();
    setTime('');
    setRawDate(undefined);
  }

  function formatDateToAmerican(date?: Date) {
    if (!date) return '';
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const formattedMonth = month < 10 ? addZeroToLeft(month) : month;
    const day = date.getDate();
    const formattedDay = day < 10 ? addZeroToLeft(day) : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  function formatDateToHttpRequest(time: string, date?: Date) {
    const formattedDate = formatDateToAmerican(date);
    return `${formattedDate}T${time}:00.000Z`;
  }

  async function createAppointment(data: CreateAppointmentFormInterface) {
    setIsLoading(true);
    setHasCreateAppointmentFailed(false);
    const remoteCreateAppointment = makeRemoteCreateAppointment();

    try {
      const formattedDateToHttpRequest = formatDateToHttpRequest(time, rawDate);
      const FAKE_ID = 1;
      const { paciente, observacao } = data;
      const param = {
        idMedico: FAKE_ID,
        paciente,
        dataConsulta: formattedDateToHttpRequest,
        observacao,
      };
      await remoteCreateAppointment.execute(param);
      setIsSuccessMessageVisible(true);
      resetInputs();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasCreateAppointmentFailed(true);
    }
  }

  const onDismissTimePicker = useCallback(() => {
    setIsTimePickerVisible(false);
  }, []);

  const onConfirmTimePicker = useCallback((time: TimeInterface) => {
    setIsTimePickerVisible(false);
    const formattedTime = formatTime(time.hours, time.minutes);
    setTime(formattedTime);
  }, []);

  const onDismissDatePicker = useCallback(() => {
    setIsDatePickerVisible(false);
  }, []);

  const onConfirmDatePicker = useCallback((params: any) => {
    setIsDatePickerVisible(false);
    setRawDate(params.date);
  }, []);

  return (
    <ScreenContainer>
      <DatePickerInput value={date} onPress={() => setIsDatePickerVisible(true)} />

      <TimePickerInput value={time} onPress={() => setIsTimePickerVisible(true)} />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nome do paciente"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="paciente"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput label="OBS:" value={value} onBlur={onBlur} onChangeText={onChange} />
        )}
        name="observacao"
      />

      <MainButton
        onPress={handleSubmit(createAppointment)}
        isLoading={isLoading}
        buttonText="Criar consulta"
        isDisabled={isMainButtonDisabled}
      />

      <HelperText type="error" visible={hasCreateAppointmentFailed}>
        Algo deu errado, tente novamente mais tarde
      </HelperText>

      <TimePickerModal
        visible={isTimePickerVisible}
        onDismiss={onDismissTimePicker}
        onConfirm={onConfirmTimePicker}
        hours={12}
        minutes={14}
      />
      <DatePickerModal
        locale="pt"
        mode="single"
        visible={isDatePickerVisible}
        onDismiss={onDismissDatePicker}
        date={rawDate}
        onConfirm={onConfirmDatePicker}
      />

      <SnackBarContainer>
        <Snackbar
          visible={isSuccessMessageVisible}
          onDismiss={() => setIsSuccessMessageVisible(false)}
          duration={Snackbar.DURATION_SHORT}
        >
          Consulta criada com sucesso!
        </Snackbar>
      </SnackBarContainer>
    </ScreenContainer>
  );
}
