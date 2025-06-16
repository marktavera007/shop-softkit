'use server';

import * as z from 'zod';

import { LoginSchema } from '../shemas';
import { signIn } from '@base/auth';

export async function Login(values: z.infer<typeof LoginSchema>) {
	try {
		await signIn('credentials', {
			email: values.email,
			password: values.passwords,
			redirect: false,
		});

		return { success: '¡Ingreso Exitoso!' };
	} catch (error) {
		console.error('Error signing in:', error);
		return { error: '¡Correo o contraseña inválida!' };
	}
}
