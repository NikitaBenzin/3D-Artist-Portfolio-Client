'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import { BACKEND_MAIN } from '@/constants'
import categoryService from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

interface Params {
	id: string
}

export function CategoryGallery({ id }: Params) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['category-by-id'],
		queryFn: () => categoryService.getCategoryById(id)
	})

	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)
	else if (error?.message || data?.data?.posts?.length == 0)
		return <h1 className="my-8 text-center">Category does not exist</h1>

	return (
		<>
			<h1 className="my-8 text-center">Category: {data?.data.title}</h1>

			<ul className="flex flex-col gap-4 px-4">
				{data?.data.posts?.map(item => (
					<li key={item.id}>
						<Image
							alt={`${item.title}`}
							src={`${BACKEND_MAIN}${item.imagePath}`}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					</li>
				))}
			</ul>
		</>
	)
}
