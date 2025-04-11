'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import postService from '@/services/post.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

export default function Page() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['posts-by-category'],
		queryFn: () => postService.getPostsByCategory()
	})

	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)
	else if (error?.message)
		<h1 className="my-8 text-center">Category does not exist</h1>

	return (
		<section>
			<h1 className="my-8 text-center">My Category: {category}</h1>
			<ul className="flex flex-col gap-4">
				<li>
					<Image
						alt="asd"
						src="/Lake.png"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</li>
				<li>
					<Image
						alt="asd"
						src="/Lake.png"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</li>
				<li>
					<Image
						alt="asd"
						src="/Lake.png"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</li>
				<li>
					<Image
						alt="asd"
						src="/Lake.png"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</li>
			</ul>
		</section>
	)
}
