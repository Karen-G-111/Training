'use server'

import { SignupFormSchema, FormState } from '@/lib/definitions'
import { z } from "zod"

export async function signup(state: FormState, formData: FormData) {
    // Проверка полей формы
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // Если какие-либо поля формы недействительны, завершаем выполнение
    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error).fieldErrors,
        }
    }

    // Вызываем провайдера или базу данных для создания пользователя...
}