import experience from '@public/home/iconos/experiencia.png';
import alquiler from '@public/home/iconos/alquiler.png';
import clientes from '@public/home/iconos/clientes-satisfechos.png';
import maquinaria from '@public/home/iconos/maquinarias.png';

import Image from 'next/image';
export default function SeccionIconos() {
	const stats = [
		{
			icon: maquinaria,
			number: '15,000+',
			label: 'Maquinarias Vendidas',
		},
		{
			icon: alquiler,
			number: '2,800+',
			label: 'Maquinarias Alquiladas',
		},
		{
			icon: clientes,
			number: '750+',
			label: 'Clientes Satisfechos',
		},
		{
			icon: experience,
			number: '28+',
			label: 'Años de Experiencia',
		},
	];

	return (
		<section className="relative py-10 px-4 bg-maquiperu-naranja ">
			{/* Content */}
			<div className="relative z-10 max-w-[1400px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat, index) => {
						return (
							<div
								key={index}
								className="bg-maquiperu-azul  rounded-sm p-6 text-center text-white "
							>
								<div className="flex justify-center mb-4">
									<Image
										src={stat.icon}
										alt="icono"
										className="object-contain"
									/>
								</div>
								<div className="text-2xl font-semibold mb-0.5 text-white">
									{stat.number}
								</div>
								<div className="text-base text-gray-200">{stat.label}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
