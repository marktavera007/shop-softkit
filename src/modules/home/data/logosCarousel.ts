import uno from '@public/home/logos/1.png';
import dos from '@public/home/logos/2.png';
import tres from '@public/home/logos/3.png';
import cuatro from '@public/home/logos/4.png';
import cinco from '@public/home/logos/5.png';

import { StaticImageData } from 'next/image';

export interface LogosClientes {
	imageUrl: StaticImageData;
	alt: string;
}

export function LogosClientesData(): LogosClientes[] {
	return [
		{
			imageUrl: uno,
			alt: 'Logo de Alfaparf, marca internacional de productos para el cuidado capilar',
		},
		{
			imageUrl: dos,
			alt: 'Logo de Bemvoleo, empresa de soluciones tecnológicas',
		},
		{
			imageUrl: tres,
			alt: 'Logo de Italian Max, marca de productos de belleza y cuidado personal',
		},
		{
			imageUrl: cuatro,
			alt: 'Logo de Wella, marca reconocida en el cuidado del cabello y productos cosméticos',
		},
		{
			imageUrl: cinco,
			alt: 'Logo de Yellow, empresa dedicada a la innovación en productos de belleza',
		},
		{
			imageUrl: uno,
			alt: 'Logo de Trend, marca de tendencias en productos de moda y belleza',
		},
		{
			imageUrl: dos,
			alt: 'Logo de Trend, marca de tendencias en productos de moda y belleza',
		},
		{
			imageUrl: tres,
			alt: 'Logo de Italian Max, marca de productos de belleza y cuidado personal',
		},
		{
			imageUrl: cuatro,
			alt: 'Logo de Wella, marca reconocida en el cuidado del cabello y productos cosméticos',
		},
	];
}
