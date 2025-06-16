'use client';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from './NavLinks';
import logo from '@public/logo-blanco.webp';
import { socialLinks } from '../../data/redes';
import ButtonMaquiperu from '../../components/personalizados/ButtonMaquiperu';
import { Mail, Phone } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { UserDropdownMenu } from './ProfileTop';
// import { Search } from 'lucide-react';

export const Header = () => {
	const { data: session } = useSession();
	const isAuthenticated = !!session?.user;
	return (
		<header className="sticky top-0 w-full z-40 bg-maquiperu-azul shadow-md ">
			<div className=" flex h-16  items-center justify-between w-full max-w-[1400px] mx-auto px-4">
				<div className="flex items-center gap-16">
					<Link href="/" className="w-full">
						<Image
							src={logo}
							alt="logo de trendacademy"
							className="object-contain w-full h-auto will-change-transform"
							priority
						/>
					</Link>
					<NavLinks />
				</div>
				<div className="flex items-center justify-between gap-4">
					{/* <div className=" relative font-montserrat-fuente">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BEBEBE] w-4 h-4" />
						<input
							type="search"
							placeholder="Buscar cursos..."
							className="bg-transparent border border-[#BEBEBE] text-white w-48 placeholder-[#BEBEBE] text-xs rounded-lg py-1.5 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-[white/20]"
						/>
					</div> */}
					<div className="hidden items-center gap-3.5">
						{socialLinks.map((social, index) => (
							<Link
								key={index}
								href={social.url}
								className=" flex items-center  "
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={social.icon}
									alt={social.name}
									className="hover:opacity-80 object-contain transition-opacity w-[25px] h-5"
								/>
							</Link>
						))}
					</div>
					<div className="hidden lg:flex items-center gap-2 text-xs flex-shrink-0">
						<div className="flex items-center gap-2 bg-slate-700/40 px-3 py-1.5 rounded-lg">
							<div className="bg-maquiperu-naranja p-1.5 rounded-full">
								<Phone className="w-3 h-3 text-white" />
							</div>
							<span className="text-gray-300 font-semibold">
								(+51) 999 792 283
							</span>
						</div>
						<div className="flex items-center gap-2 bg-slate-700/40 px-3 py-1.5 rounded-lg">
							<div className="bg-maquiperu-naranja p-1.5 rounded-full">
								<Mail className="w-3 h-3 text-white" />
							</div>
							<span className="text-gray-300 font-semibold">
								ventas@maquiperu.com
							</span>
						</div>
					</div>
					<div className="w-px h-6 bg-slate-700"></div>
					<div className="hidden md:flex items-center justify-end gap-4 ">
						{!isAuthenticated && (
							<>
								{/* <ButtonMaquiperu
									href="/auth/login"
									variant="text"
									className="!text-xs"
								>
									Entrar
								</ButtonMaquiperu> */}
								<ButtonMaquiperu
									href="/auth/login"
									variant="filled"
									className="whitespace-nowrap text-xs"
								>
									Iniciar Sesión
								</ButtonMaquiperu>
							</>
						)}
						{isAuthenticated && <UserDropdownMenu usuario={session?.user} />}
					</div>
				</div>
			</div>
		</header>
	);
};
