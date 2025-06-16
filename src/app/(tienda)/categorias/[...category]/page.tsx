type Props = {
	params: Promise<{ category: string[] }>; // params ahora es una promesa
};
export default async function Page({ params }: Props) {
	const { category } = await params;
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
		<div>
			<h1>Productos</h1>
			<p>Categorías: {category.join(' / ')}</p>
			<ul>
				{category.map((cat, index) => (
					<li key={index}>{cat}</li>
				))}
			</ul>
		</div>
	);
}
