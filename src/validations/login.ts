import { z } from 'zod';

const loginSchema = z
  .object({
    email: z
      .string({ required_error: 'O campo de e-mail é obrigatório' })
      .email('Por favor, insira um e-mail válido'),
    password: z.string({ required_error: 'O campo de senha é obrigatório' }),
  })
  .required();

export type FormLogin = z.infer<typeof loginSchema>;

export default loginSchema;
