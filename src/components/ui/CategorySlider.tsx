'use client'

import { BACKEND_MAIN } from '@/constants'
import postService from '@/services/post.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { MiniLoader } from './MiniLoader'

export function CategorySlider() {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.fetchPosts()
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
				<React.Fragment key={post.id}>
					<input type="radio" name="slide" id={`c${idx}`} defaultChecked />
					<label
						style={{
							backgroundImage: `url('${BACKEND_MAIN}${post.imagePath}')`
						}}
						htmlFor={`c${idx}`}
						className="card"
					>
						<div className="row">
							<span className="vertical-text">{post.categoryName}</span>
							<div className="description">
								<h4>{post.title}</h4>
								{/* <p>Winter has so much to offer - creative activities</p> */}
							</div>
						</div>
					</label>
				</React.Fragment>
			))}
		</div>
	)
}
