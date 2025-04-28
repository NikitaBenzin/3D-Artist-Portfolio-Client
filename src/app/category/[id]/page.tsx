import { CategoryGallery } from './CategoryGallery'
export default async function Page({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<section>
			<CategoryGallery id={id} />
		</section>
	)
}
