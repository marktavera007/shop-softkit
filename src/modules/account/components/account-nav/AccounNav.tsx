'use client';
import { ActiveLinks } from './ActiveLinks';
import {
	LayoutDashboard,
	MapPin,
	Package,
	ShoppingBasket,
	User,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export const AccountNavLinks = () => {
	const pathname = usePathname();
	const links = [
		{
			name: 'Vista General',
			href: '/dashboard',
			icon: LayoutDashboard,
		},
		{
			name: 'Perfil',
			href: '/dashboard/profile',
			icon: User,
		},
		{
			name: 'Direccion',
			href: '/dashboard/addresses',
			icon: MapPin,
		},
		{
			name: 'Órdernes',
			href: '/dashboard/orders',
			icon: Package,
			isActive: pathname.includes('/dashboard/orders'),
		},
		{
			name: 'Productos',
			href: '/dashboard/products',
			icon: ShoppingBasket,
			isActive: pathname.includes('/dashboard/products'),
		},
	];
	return (
		<div className="flex w-full max-w-[160px] flex-col gap-2 sticky top-[104px]">
			{links.map((link) => {
				return <ActiveLinks key={link.name} {...link} />;
			})}
		</div>
	);
};
