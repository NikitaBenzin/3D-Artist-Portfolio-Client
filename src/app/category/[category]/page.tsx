import { CategoryGallery } from './CategoryGallery'
export default async function Page({
	params
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params
	return (
		<section>
			<CategoryGallery category={category} />
		</section>
	)
}
