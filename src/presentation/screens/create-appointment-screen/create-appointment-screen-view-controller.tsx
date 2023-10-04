import { useState, useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Keyboard } from 'react-native';

// Helpers
import { addZeroToLeft, formatDate, formatTime } from '~/presentation/helpers';

// Types
import { CreateAppointmentFormInterface, TimeInterface } from './types';
import { makeRemoteCreateAppointment } from '~/main/factories/usecases';
import { AuthContext } from '~/presentation/context';

export function useCreateAppointmentScreenViewController() {
  const { user } = useContext(AuthContext);
  const [rawDate, setRawDate] = useState(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [time, setTime] = useState('');
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCreateAppointmentFailed, setHasCreateAppointmentFailed] = useState(false);
  const { reset, watch, control, handleSubmit } = useForm<CreateAppointmentFormInterface>({
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
  const isMainButtonDisabled =
    pacienteValue === '' || observacao === '' || isTimeFieldEmpty || isLoading || !rawDate;
  const userName = user?.nome || '';

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
    Keyboard.dismiss();
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

  return {
    isDatePickerVisible,
    onDismissTimePicker,
    onConfirmTimePicker,
    onDismissDatePicker,
    onConfirmDatePicker,
    createAppointment,
    isMainButtonDisabled,
    date,
    isSuccessMessageVisible,
    isTimePickerVisible,
    isLoading,
    hasCreateAppointmentFailed,
    time,
    control,
    handleSubmit,
    rawDate,
    setIsTimePickerVisible,
    setIsDatePickerVisible,
    setIsSuccessMessageVisible,
    userName,
  };
}
