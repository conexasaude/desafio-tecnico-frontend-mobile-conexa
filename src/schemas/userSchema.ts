import { z } from 'zod'

export const userSchema = z.object({
  email: z
    .string()
    .min(1, 'Este campo não pode ser deixado em branco.')
    .email('E-mail inválido, por favor, insira um e-mail válido.'),
  password: z.string().min(1, 'Este campo não pode ser deixado em branco.'),
})

export type SignInFormValues = z.infer<typeof userSchema>
