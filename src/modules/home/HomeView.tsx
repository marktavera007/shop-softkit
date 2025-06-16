import React from 'react';
import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import SeccionIconos from './components/SeccionIconos';
import { CarouselLogosClientes } from './components/carouselLogos/LogosCarousel';
import SeccionNosotros from './components/SeccionNosotros';

export const HomeView = () => {
	return (
		<main>
			<BannerCarouselHome />
			<SeccionNosotros />
			<div className="w-full overflow-hidden py-10">
				<div className="max-w-[1400px] mx-auto flex items-center h-full flex-col  justify-center gap-10">
					<div className="flex flex-col gap-3.5">
						<h2 className="text-maquiperu-naranja px-4 py-1.5 border font-semibold border-maquiperu-naranja w-fit mx-auto uppercase">
							Nuestros clientes
						</h2>
						<p className="font-bold text-maquiperu-azul text-xl">
							GRACIAS POR CONFIAR EN MAQUIPERU
						</p>
					</div>
					<CarouselLogosClientes />
				</div>
			</div>

			<SeccionIconos />
		</main>
	);
};
