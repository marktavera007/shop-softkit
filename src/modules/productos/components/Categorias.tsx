import React from 'react';

type Categoria = {
	id: number;
	nombre: string;
	slug: string;
};

export default function ListaCategorias() {
	const categorias: Categoria[] = [
		{ id: 1, nombre: 'Sandalias', slug: 'sandalias' },
		{ id: 2, nombre: 'Botas', slug: 'botas' },
		{ id: 3, nombre: 'Zapatillas', slug: 'zapatillas' },
	];

	return (
		<aside>
			<h2 className="font-medium text-muted-foreground text-xs mb-2">
				Categorías
			</h2>
			<ul>
				<li>
					<button className="w-full text-left rounded underline underline-offset-4 text-sm">
						Todos
					</button>
				</li>
				{categorias.map((categoria) => (
					<li key={categoria.id}>
						<button className="w-full text-left rounded hover:underline underline-offset-4 text-sm">
							{categoria.nombre}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
