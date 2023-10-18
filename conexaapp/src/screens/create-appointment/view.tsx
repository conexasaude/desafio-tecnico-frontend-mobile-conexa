import {Platform, ScrollView, View} from 'react-native';
import {
  Form,
  FormContainer,
  Title,
  FormTitle,
  KeyboardAvoidingView,
  styleSheet,
  Icon,
  DateTimeContainer,
} from './styles';
import {Button} from '@components/button/view';
import {useCreateAppointmentViewModel} from './view-model';
import {InputForm} from '@components/form/input-form/view';
import {Container} from '@components/container/view';
import {Header} from '@components/header';
import BackIconSVG from '@assets/chevron-left.svg';
import {DateMask} from '@helpers/masks/date';
import {HourMask} from '@helpers/masks/hour';

export function CreateAppointment() {
  const {user, control, handleSubmit, errors, handleCreate, handleGoBack} =
    useCreateAppointmentViewModel();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header.Root>
        <Header.VStack>
          <Header.Title>Criar Agendamento</Header.Title>
          <Header.HStack style={styleSheet.HStack}>
            <Header.Button
              title="Voltar"
              leftElement={<BackIconSVG />}
              onPress={handleGoBack}
            />
            <Icon source={require('@assets/logo-icon-conexa.png')} />
          </Header.HStack>
        </Header.VStack>
      </Header.Root>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <Container>
          <Title>Agendamento para {user.nome}</Title>
          <FormContainer>
            <Form>
              <FormTitle>Dados do Paciente</FormTitle>
              <InputForm
                control={control}
                name="patient"
                placeholder="jose@gmail.com"
                autoCapitalize="words"
                autoCorrect={false}
                error={errors.patient && String(errors.patient.message)}
                label="Nome do Paciente"
              />
              <DateTimeContainer>
                <View style={{flex: 1}}>
                  <InputForm
                    control={control}
                    name="date"
                    label="Data"
                    placeholder="Ex.: 10/12/2023"
                    autoCapitalize="none"
                    error={errors.date && String(errors.date.message)}
                    insertMask={DateMask}
                  />
                </View>
                <View style={{flex: 1}}>
                  <InputForm
                    control={control}
                    name="hour"
                    label="Hora"
                    placeholder="Ex.: 12:30"
                    autoCapitalize="none"
                    error={errors.hour && String(errors.hour.message)}
                    insertMask={HourMask}
                  />
                </View>
              </DateTimeContainer>

              <InputForm
                control={control}
                name="description"
                placeholder="Digite aqui as observações do paciente."
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.description && String(errors.description.message)}
                label="Observações"
                multiline={true}
                style={{minHeight: 50}}
              />

              <Button
                title="Agendar"
                onPress={handleSubmit(handleCreate)}
                variant="outline"
              />
            </Form>
          </FormContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
