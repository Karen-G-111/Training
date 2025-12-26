'use server'

import { sql } from '@/lib/db'
import { SignupFormSchema, FormState } from '@/lib/definitions'
import { z } from "zod"
import bcrypt from 'bcryptjs'

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

    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10)

    try {
        await sql`INSERT INTO users (login, password)
            VALUES (${validatedFields.data.email}, ${hashedPassword});`
    } catch (e: any) {
        if (e?.code === '23505' && e?.constraint_name === 'users_login_key')
            return {
                errors: { email: ['Пользователь с таким email уже существует'] },
            }
        else
            throw new e
    }
}