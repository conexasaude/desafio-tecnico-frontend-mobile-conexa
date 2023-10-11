import { z } from 'zod'

export const appointmentSchema = z.object({
  patient: z.string().min(1, 'Este campo não pode ser deixado em branco'),
  appointmentDate: z
    .string()
    .min(1, 'Este campo não pode ser deixado em branco'),
  observation: z.string().optional(),
})

export type AppointmentFormValues = z.infer<typeof appointmentSchema>
