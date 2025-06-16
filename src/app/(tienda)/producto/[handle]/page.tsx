import { ProductoView } from '@base/src/modules/productos/ProductoView';

type Props = {
	params: Promise<{ handle: string }>; // params ahora es una promesa
};
export default async function Page({ params }: Props) {
	const { handle } = await params;
	console.log(handle);
	// const session = await auth();
	// const res = await fetch(
	// 	`${process.env.NEXT_PUBLIC_API_BACKEND}/course/${params.slug}/lesson/${params.leccionId}/user/${session?.user.id}`,
	// 	{
	// 		next: { revalidate: 60 },
	// 		headers: {
	// 			Authorization: `Bearer ${session?.user.token}`,
	// 		},
	// 	}
	// );

	// const DetalleCurso = await res.json();
	// console.log('holaaa:', DetalleCurso);
	return (
		<div className="max-w-[1400px] px-4 mx-auto min-h-screen">
			<ProductoView />
		</div>
	);
}
