import { ProductosView } from '@base/src/modules/productos/ProductosView';

export default async function Page() {
	return (
		<div className="max-w-[1400px] px-4 mx-auto min-h-screen">
			<ProductosView />
		</div>
	);
}
