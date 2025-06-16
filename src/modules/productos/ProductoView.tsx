import { BotonRegresar } from '@base/src/common/components/personalizados/ButtonBack';
import React from 'react';
import { DetalleProduct } from './components/DetalleProduct';
import { CarruselImagenes } from './components/carousel/carousel';

export const ProductoView = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const OPTIONS: any = {};
	const SLIDES = [
		'http://shop.softkitpe.com/cache/large/product/28/AXkA9cs3WGpongCNlUDRTmfVUdBDaStbjgnmjeTD.webp',
		'http://shop.softkitpe.com/cache/large/product/28/AXkA9cs3WGpongCNlUDRTmfVUdBDaStbjgnmjeTD.webp',
		'http://shop.softkitpe.com/cache/large/product/28/AXkA9cs3WGpongCNlUDRTmfVUdBDaStbjgnmjeTD.webp',
	];

	return (
		<div className="py-10">
			<BotonRegresar />
			<div className="gap-8 lg:grid lg:grid-cols-2 mt-6">
				<div className="mx-auto shrink-0">
					<CarruselImagenes slides={SLIDES} options={OPTIONS} />
				</div>

				<DetalleProduct />
			</div>
		</div>
	);
};
