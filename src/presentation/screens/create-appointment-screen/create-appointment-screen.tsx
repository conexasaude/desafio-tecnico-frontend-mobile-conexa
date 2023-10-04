import React from 'react';
import { Controller } from 'react-hook-form';

// Components
import { DatePickerInput, TextInput, TimePickerInput } from '~/presentation/components/inputs';
import { MainButton } from '~/presentation/components/buttons';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { HelperText, Snackbar } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

// Styles
import { Header, Title, ScreenContainer, SnackBarContainer, SubtitleContainer } from './styles';

import { useCreateAppointmentScreenViewController } from './create-appointment-screen-view-controller';
import { Heading } from '~/presentation/components';

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
    userName,
  } = useCreateAppointmentScreenViewController();

  return (
    <ScreenContainer>
      <Header>
        <Title type="H1">{`Bem vindo, ${userName}`}</Title>
        <SubtitleContainer>
          <Heading type="H2">Crie suas consultas abaixo</Heading>
        </SubtitleContainer>
      </Header>

      <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
        <View pointerEvents="none">
          <DatePickerInput value={date} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsTimePickerVisible(true)}>
        <View pointerEvents="none">
          <TimePickerInput value={time} />
        </View>
      </TouchableOpacity>

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
