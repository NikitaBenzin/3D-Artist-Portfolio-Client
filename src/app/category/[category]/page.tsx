import { CategoryGallery } from './CategoryGallery'

export default async function Page({
	params
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params

	return (
		<section>
			<h1 className="my-8 text-center">Category: {category}</h1>
			<CategoryGallery category={category} />
		</section>
	)
}
