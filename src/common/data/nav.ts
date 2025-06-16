import { Nav } from '../types/nav';

export function getMenuListApp(pathname: string): Nav[] {
	return [
		{
			name: 'Inicio',
			href: '/',
			active: pathname === '/cursos',
		},
		// {
		// 	name: 'Nosotros',
		// 	href: '/nosotros',
		// 	active: pathname === '/cursos',
		// },
		{
			name: 'Tienda',
			href: '/productos',
			active: pathname === '/productos',
		},

		// {
		// 	name: 'Contacto',
		// 	href: '/contacto',
		// 	active: pathname === '/contacto',
		// },
		// {
		// 	name: 'Catálogo',
		// 	href: '/categoria/brasa-familiar',
		// 	active: pathname.includes('/categoria'),
		// icon: <AiFillProduct className="size-4" />
		// },
	];
}
