import React from 'react';
import { Controller } from 'react-hook-form';

// Components
import { DatePickerInput, TextInput, TimePickerInput } from '~/presentation/components/inputs';
import { MainButton } from '~/presentation/components/buttons';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { HelperText, Snackbar } from 'react-native-paper';

// Styles
import { ScreenContainer, SnackBarContainer } from './styles';

import { useCreateAppointmentScreenViewController } from './create-appointment-screen-view-controller';

export function CreateAppointmentScreen() {
  const {
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
  } = useCreateAppointmentScreenViewController();

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
