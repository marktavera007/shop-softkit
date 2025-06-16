import Tractor from '@public/home/aboutIcons/builderon-img5.png';
import Grua from '@public/home/aboutIcons/builderon-img6.png';
import Albañil from '@public/home/aboutIcons/builderon-img7.png';
import Casco from '@public/home/aboutIcons/builderon-img8.png';

import Image from 'next/image';

const features = [
	{
		icon: Tractor,
		title: 'Representante Autorizado',
		description: 'A nivel nacional de HYUNDAI, YALE, SONALIKA y SCHACMAN',
	},
	{
		icon: Grua,
		title: 'Servicio Post Venta',
		description:
			'Mantenimientos preventivos, correctivos, reparaciones y repuestos',
	},
	{
		icon: Albañil,
		title: '28 Años de Experiencia',
		description: '+1,000 Maquinarias vendidas Acompañando +300 Clientes',
	},
	{
		icon: Casco,
		title: 'Alquiler de Maquinaria',
		description:
			'Contratos por Proyectos de todo tipo de Maquinarias y Equipos',
	},
];

export default function SeccionNosotros() {
	return (
		<section className="bg-maquiperu-naranja py-16 px-6 lg:px-8">
			<div className="max-w-[1400px] mx-auto">
				<div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 items-center">
					{/* Left side - Company info */}
					<div className="text-white">
						<h2 className="text-3xl lg:text-4xl font-bold mb-6">
							¿Por qué Elegir a<br />
							MAQUIPERU?
						</h2>
						<p className="text-lg mb-8 leading-relaxed text-balance">
							MAQUIPERU es una de las empresas peruana de venta y alquiler de
							maquinaria pesada, logística y agrícola con más de 28 años de
							experiencia, atendiendo siempre con calidad y garantía.
						</p>
						<button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-orange-500 font-semibold px-8 py-3">
							CONTÁCTENOS
						</button>
					</div>

					{/* Right side - Feature cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-maquiperu-azul border-none rounded-sm"
							>
								<div className="p-6 text-white">
									<div className="flex items-center gap-4">
										<div className="text-orange-500 flex-shrink-0">
											<Image
												src={feature.icon}
												alt={feature.title}
												className="object-contain w-14 h-auto"
											/>
										</div>
										<div>
											<h3 className="font-bold text-base mb-1 leading-snug">
												{feature.title}
											</h3>
											<p className="text-sm text-gray-200 text-pretty">
												{feature.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
