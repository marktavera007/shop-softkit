'use client';
import { Button } from '@shadcnui/button';
import { useRouter } from 'next/navigation';

export function BotonRegresar() {
	const router = useRouter();

	return (
		<Button
			variant="link"
			className="text-dashboard-fondo flex h-0 items-center gap-1 p-0 text-xs"
			onClick={() => {
				router.back();
			}}
		>
			{`<`}
			Volver
		</Button>
	);
}
