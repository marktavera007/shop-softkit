import Link from 'next/link';
import { UserAuthForm } from '../components/auth/auth-form';

export default function LoginView() {
	return (
		<div className="max-w-[400px] mx-auto h-[calc(100dvh-64px)] flex items-center justify-center flex-col ">
			<h1 className="mb-8 text-center text-xl font-semibold uppercase text-maquiperu-azul">
				Ingresar
			</h1>
			<UserAuthForm />
			<div className="text-center mt-6">
				<p className="text-maquiperu-azul text-sm flex gap-2 items-center">
					¿No tienes una cuenta?{' '}
					<Link
						href="/auth/register"
						className="text-maquiperu-naranja hover:text-maquiperu-naranja"
					>
						Regístrate
					</Link>
				</p>
			</div>
		</div>
	);
}
