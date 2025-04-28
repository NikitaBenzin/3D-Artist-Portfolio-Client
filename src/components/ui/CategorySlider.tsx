'use client'

import { BACKEND_MAIN } from '@/constants'
import categoryService from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { MiniLoader } from './MiniLoader'

export function CategorySlider() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-all-category'],
		queryFn: () => categoryService.fetchCategory()
	})

	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)

	return (
		<div className="slider-container">
			{data?.data.map((item, idx) => (
				<React.Fragment key={idx}>
					{item.posts?.length != 0 && (
						<>
							<input type="radio" name="slide" id={`c${idx}`} defaultChecked />
							<label
								style={{
									backgroundImage: `url('${BACKEND_MAIN}${item.imagePath}')`
								}}
								htmlFor={`c${idx}`}
								className="card"
							>
								<Link className="row" href={`/category/${item.id}`}>
									<div className="vertical-text">{item.title}</div>
									<div className="description">
										<h4 className="category-title">{item.description}</h4>
										{/* <p>Winter has so much to offer - creative activities</p> */}
									</div>
								</Link>
							</label>
						</>
					)}
				</React.Fragment>
			))}
		</div>
	)
}
