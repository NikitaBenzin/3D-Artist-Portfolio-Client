'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import { BACKEND_MAIN } from '@/constants'
import postService from '@/services/post.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

interface Params {
	category: string
}

export function CategoryGallery({ category }: Params) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['posts-by-category'],
		queryFn: () => postService.getPostsByCategory(category)
	})
	console.log(data)
	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)
	else if (error?.message || data?.data.length == 0)
		return <h1 className="my-8 text-center">Category does not exist</h1>

	return (
		<ul className="flex flex-col gap-4 px-4">
			{data?.data.map(item => (
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
	)
}
