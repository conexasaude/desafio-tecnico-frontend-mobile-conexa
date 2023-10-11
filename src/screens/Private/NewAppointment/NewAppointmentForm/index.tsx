import { useState } from 'react'

import { TouchableOpacity } from 'react-native'

import { ContainerForm } from '@components/Form/ContainerForm'
import { InputForm } from '@components/Form/InputForm'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import DatePicker from 'react-native-date-picker'

import {
  AppointmentFormValues,
  appointmentSchema,
} from '@schemas/appointmentSchema'

import { useDate } from '@hooks/useDate'
import { Button } from '@components/Button'

interface NewAppointmentFormProps {
  onSubmit: (formValues: AppointmentFormValues) => void
  loading: boolean
}

export function NewAppointmentForm({
  onSubmit,
  loading,
}: NewAppointmentFormProps) {
  const [open, setOpen] = useState(false)

  const date = useDate()

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    mode: 'onChange',
  })

  return (
    <ContainerForm>
      <InputForm
        control={control}
        name="patient"
        label="Nome do paciente *"
        error={errors.patient?.message}
        placeholder="Digite o nome do paciente"
      />

      <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
        <InputForm
          control={control}
          name="appointmentDate"
          label="Data e hora da consulta *"
          error={errors.appointmentDate?.message}
          placeholder="Selecione a data e hora"
          editable={false}
        />
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={new Date()}
        minimumDate={new Date()}
        onConfirm={(dateInput) => {
          setOpen((prev) => !prev)
          setValue(
            'appointmentDate',
            date(dateInput).format('DD/MM/YYYY HH:mm'),
            {
              shouldValidate: true,
              shouldDirty: true,
            },
          )
        }}
        onCancel={() => {
          setOpen((prev) => !prev)
        }}
      />

      <InputForm
        control={control}
        name="observation"
        label="Observação"
        error={errors.observation?.message}
        placeholder="Digite uma observação"
      />

      <Button
        title="Agendar consulta"
        disabled={!isValid}
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      />
    </ContainerForm>
  )
}
