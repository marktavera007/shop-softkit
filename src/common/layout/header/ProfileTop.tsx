/* eslint-disable @typescript-eslint/no-explicit-any */

import { LogOut, SquareLibrary } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@shadcnui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@shadcnui/avatar';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

export function UserDropdownMenu({ usuario }: any) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className=" focus-visible:ring-0 focus:outline-none cursor-pointer flex  w-full">
					<Avatar className="h-8 w-8">
						<AvatarImage src={usuario.image} alt={usuario.name} />
						<AvatarFallback>{usuario.name.charAt(0)}</AvatarFallback>
					</Avatar>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-56  font-montserrat-fuente  p-0"
				align="end"
				forceMount
				sideOffset={20}
			>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-0.5">
						<p className="text-sm  font-medium">{usuario.email}</p>
						<p className="text-muted-foreground text-xs ">
							{usuario.role === 'STUDENT' ? 'Estudiante' : 'Administrador'}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="mb-0" />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href="/misCursos" className="flex items-center gap-2">
							<SquareLibrary className="mr-2 h-4 w-4" />
							<span>Mis Cursos</span>
						</Link>
					</DropdownMenuItem>
					{/* <DropdownMenuItem asChild>
						<Link href="/account/dashboard" className="flex items-center gap-2">
							<Settings className="mr-2 h-4 w-4" />
							<span>Configuración</span>
						</Link>
					</DropdownMenuItem> */}
				</DropdownMenuGroup>
				<DropdownMenuSeparator className="my-0" />
				<DropdownMenuItem asChild>
					<button
						onClick={() => signOut()}
						className="flex w-full items-center gap-2"
					>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Cerrar sesión</span>
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
