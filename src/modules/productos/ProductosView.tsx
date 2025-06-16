import React from 'react';
import ListaCategorias from './components/Categorias';
import { productos } from './data/productos';
import Link from 'next/link';

export const ProductosView = () => {
	return (
		<div className="py-10 flex items-start gap-10 ">
			<div className="sticky top-[104px]">
				<ListaCategorias />
			</div>
			<div className="flex-1 h-full">
				{/* <h3 className="mb-4 font-medium text-lg">
					Todos los productos({productos.length})
				</h3> */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{productos.map((producto) => (
						<Link key={producto.id} href={`producto/${producto.nombre}`}>
							<div className="aspect-square group overflow-hidden rounded ">
								<img
									src={producto.imagenes[0]?.url}
									alt={producto.imagenes[0]?.alt || producto.nombre}
									className="w-full h-auto object-cover  group-hover:scale-105 transition-transform duration-300 ease-in-out"
								/>
							</div>
							<h2 className="text-lg font-medium my-2">{producto.nombre}</h2>

							<div className="flex items-center justify-between">
								<div className="font-semibold text-primary">
									S/ {producto.precio.toFixed(2)}
								</div>
								<div className="text-xs text-muted-foreground">
									Stock: {producto.stock}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
