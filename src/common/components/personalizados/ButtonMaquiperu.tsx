import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonMaquiperuProps = {
	children: ReactNode;
	href: string;
	external?: boolean;
	className?: string;
	variant?: 'text' | 'filled' | 'icon'; // Variantes para el botón
	icon?: ReactNode; // Propiedad para íconos
};

export default function ButtonMaquiperu({
	children,
	href,
	external = false,
	className = '',
	variant = 'text',
	icon, // Recibimos el icono como prop
}: ButtonMaquiperuProps) {
	// Clases base
	const baseClasses =
		'inline-flex items-center justify-center font-montserrat-fuente gap-2 font-semibold text-sm transition-colors duration-300 ease-in-out';

	// Clases según el tipo de botón
	const variantClasses = {
		text: 'text-white hover:text-gray-50', // Solo texto, sin fondo
		filled:
			'bg-maquiperu-naranja text-white hover:bg-maquiperu-naranja/92 rounded-[8px] px-4 py-1.5 ', // Fondo azul con texto blanco
		icon: 'bg-trendacademy-rosado text-white hover:bg-maquiperu-naranja rounded-[5px] px-4 py-1.5', // Icono, texto azul
	};

	// Combinación final de clases usando cn de ShadCN
	const finalClassName = cn(baseClasses, variantClasses[variant], className);

	// Si `external` es true, usamos una etiqueta <a>
	if (external) {
		return (
			<a
				href={href}
				className={finalClassName}
				target="_blank"
				rel="noopener noreferrer"
			>
				{icon && <span>{icon}</span>}
				{children}
			</a>
		);
	}

	// Enlaces internos con <Link>
	return (
		<Link href={href} className={finalClassName}>
			{icon && <span>{icon}</span>}
			{children}
		</Link>
	);
}
