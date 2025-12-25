import { z } from 'zod'

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Имя должно содержать не менее 2 символов.' })
        .trim(),
    email: z.string().email({ message: 'Пожалуйста, введите корректный email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Должен содержать не менее 8 символов' })
        .trim(),
})

export type FormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined