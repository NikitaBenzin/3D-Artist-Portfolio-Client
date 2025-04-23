'use client'

import { BACKEND_MAIN } from '@/constants'
import postService from '@/services/post.service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { MiniLoader } from './MiniLoader'

export function CategorySlider() {
	const { data, isLoading } = useQuery({
		queryKey: ['first-posts-by-category'],
		queryFn: () => postService.getFirstPostsByCategory()
	})

	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)

	return (
		<div className="slider-container">
			{data?.data.map((post, idx) => (
				<React.Fragment key={post._min.id}>
					<input type="radio" name="slide" id={`c${idx}`} defaultChecked />
					<label
						style={{
							backgroundImage: `url('${BACKEND_MAIN}${post._min.imagePath}')`
						}}
						htmlFor={`c${idx}`}
						className="card"
					>
						<Link className="row" href={`/category/${post._min.categoryName}`}>
							<div className="vertical-text">{post._min.categoryName}</div>
							<div className="description">
								<h4 className="category-title">{post._min.title}</h4>
								{/* <p>Winter has so much to offer - creative activities</p> */}
							</div>
						</Link>
					</label>
				</React.Fragment>
			))}
		</div>
	)
}
