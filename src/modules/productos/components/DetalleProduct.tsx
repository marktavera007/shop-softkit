'use client';
import React from 'react';
import { Button } from '@shadcnui/button';

export const DetalleProduct = () => {
	const detalle = {
		id: '12345',
		nombre: 'Camiseta Deportiva',
		frase: '¡Luce bien, juega mejor!',
		precio: '120.00',
		descuento: '20', // % de descuento
		nuevoProducto: 'Nuevo', // o null si no quieres mostrar
		descripcion:
			'Incluye camiseta de alta calidad con tecnología de absorción de sudor y ventilación.',
	};

	const isInCart = false; // Mocks para simular lógica de carrito

	const handleAddToCart = (id: string) => {
		console.log(`Agregar al carrito: ${id}`);
	};

	const handleRemoveFromCart = (id: string) => {
		console.log(`Quitar del carrito: ${id}`);
	};

	return (
		<div className="mt-6 sm:mt-4 lg:mt-0">
			{detalle.nuevoProducto && (
				<div className="mb-3 flex items-center gap-2">
					<span className="rounded-tl-lg rounded-br-lg bg-linear-to-r from-lime-400 to-lime-500 px-2 py-1 text-xs text-white capitalize">
						¡{detalle.nuevoProducto}!
					</span>
					<div className="bg-marus-orange-300 flex w-min items-center gap-1 rounded-tl-lg rounded-br-lg px-2 py-1 text-xs whitespace-nowrap text-white capitalize">
						icono <p>Delivery</p>
					</div>
				</div>
			)}
			{!detalle.nuevoProducto && (
				<div className="bg-marus-orange-300 mb-3 flex w-min items-center gap-1 rounded-tl-lg rounded-br-lg px-2 py-1 text-xs whitespace-nowrap text-white capitalize">
					as <p>Delivery</p>
				</div>
			)}

			<h1 className="text-marus-brown-300 mb-1 text-xl font-bold sm:text-2xl dark:text-white">
				{detalle.nombre}
			</h1>

			<blockquote className="text-sm text-gray-900 italic dark:text-white">
				<p>{detalle.frase}</p>
			</blockquote>

			<div className="mt-4 flex flex-row-reverse items-center justify-between sm:gap-4">
				<div className="flex items-center gap-2">
					money{' '}
					<p className="text-marus-brown-300 text-sm dark:text-gray-400">
						Precio online
					</p>
				</div>

				{detalle.descuento ? (
					<div className="flex items-center gap-x-2 py-1">
						<span className="text-lg font-medium">
							S/
							{(
								parseFloat(detalle.precio) -
								(parseFloat(detalle.precio) * parseFloat(detalle.descuento)) /
									100
							).toFixed(2)}
						</span>
						<span className="bg-marus-red-300 w-min rounded-lg px-2 py-0.5 text-xs whitespace-nowrap text-white">
							-{detalle.descuento}%
						</span>
					</div>
				) : (
					<span className="text-lg font-medium">
						S/{parseFloat(detalle.precio).toFixed(2)}
					</span>
				)}
			</div>

			{detalle.descuento && (
				<span className="flex items-center justify-start text-sm line-through">
					S/{parseFloat(detalle.precio).toFixed(2)}
				</span>
			)}

			<div className="mt-6 space-y-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:space-y-0">
				<Button
					className="hover:text-primary-700 bg-marus-red-300 text-marus-white-300 hover:bg-marus-red-300 flex h-9 w-full items-center justify-center rounded-xl border border-gray-200 px-5 text-sm font-medium focus:z-10 focus:outline-hidden"
					onClick={() =>
						isInCart
							? handleRemoveFromCart(detalle.id)
							: handleAddToCart(detalle.id)
					}
				>
					{isInCart ? <>- Quitar del carrito</> : <>+ Agregar al carrito</>}
				</Button>
			</div>

			{detalle.descripcion && (
				<>
					<h1 className="mb-2 text-lg font-semibold">
						¿Qué incluye este producto?
					</h1>
					<p className="text-marus-brown-300 mb-6 dark:text-gray-400">
						{detalle.descripcion}
					</p>
				</>
			)}
		</div>
	);
};
