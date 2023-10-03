import { z } from 'zod';

const appointmentSchema = z.object({
  patient: z.string({
    required_error: 'O campo nome do paciente é obrigatório',
  }),
  date: z.string({ required_error: 'O campo data é obrigatório' }),
  time: z.string({ required_error: 'O campo hora é obrigatório' }),
  observation: z.string().optional(),
});

export type FormScheduleAppointment = z.infer<typeof appointmentSchema>;

export default appointmentSchema;
