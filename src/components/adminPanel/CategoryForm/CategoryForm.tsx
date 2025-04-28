'use client'

import { StateToggle } from '@/components/ui/StateToggle'
import { BACKEND_MAIN } from '@/constants'
import categoryService from '@/services/category.service'
import { fileService } from '@/services/file.service'
import { ICategory } from '@/types/category.types'
import { IFiles } from '@/types/files.types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { CgSelect } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'
import { MiniLoader } from '../../ui/MiniLoader'
import { FormState } from '../SocialLinksForm/SocialLinksForm'
import { useCategoryForm } from './useCategoryForm'

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function CategoryForm({ isOpen, setIsOpen }: Props) {
	const [formState, setFormState] = useState<FormState>(FormState.CREATE)
	const { register, handleSubmit, isLoading, onSubmit } =
		useCategoryForm(formState)
	const [selectedCategory, setSelectedCategory] = useState<ICategory>()
	const [previewImage, setPreviewImage] = useState<IFiles>()

	const { data: filesData, isLoading: isLoadingFilesData } = useQuery({
		queryKey: ['get-files-in-form'],
		queryFn: () => fileService.fetchFiles()
	})

	const { data: categoryData, isLoading: isLoadingCategoryData } = useQuery({
		queryKey: ['get-category-in-form'],
		queryFn: () => categoryService.fetchCategory()
	})

	return (
		<>
			<div
				className={twMerge(
					'',
					isOpen &&
						'visible bg-zinc-900 absolute z-10 top-0 left-0 w-[100vw] h-[100vh] opacity-90 overscroll-x-none',
					!isOpen && 'hidden'
				)}
				onClick={() => setIsOpen(false)}
			></div>
			<section
				className={twMerge(
					'absolute bg-zinc-950 p-6 rounded-xl z-20',
					isOpen &&
						'visible top-[calc(1/2*100%-273px)] left-[calc(1/2*100%-150px)] sm:left-[calc(1/2*100%-216px)] sm:top-[calc(1/2*100%-181px)]',
					!isOpen && 'hidden'
				)}
			>
				<h2 className="text-2xl font-bold mb-4">Category</h2>
				<StateToggle formState={formState} setFormState={setFormState} />
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
					{isLoading || isLoadingCategoryData || isLoadingFilesData ? (
						<div className="mt-10">
							<MiniLoader width={150} height={150} />
						</div>
					) : formState == 0 ? (
						<>
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label
									htmlFor="category-selected-image"
									className="block text-gray-400 font-semibold mb-2"
								>
									Image
								</label>
								<div className="relative w-full">
									<select
										id="category-selected-image"
										className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
										defaultValue="category-selected-image"
										{...register('imagePath', { required: true })}
										onChange={e =>
											setPreviewImage(
												filesData?.data.find(
													item => item.fileUrl === e.target.value
												)
											)
										}
									>
										<option value="category-selected-image" disabled hidden>
											--select option--
										</option>
										{filesData?.data.map(item => (
											<option key={item.id} value={item.fileUrl}>
												{item.title}
											</option>
										))}
									</select>
									<CgSelect className="absolute right-2 bottom-3.5" />
								</div>
							</div>
							{previewImage && (
								<Image
									alt={`${previewImage?.title}`}
									src={`${BACKEND_MAIN}${previewImage?.fileUrl}`}
									width={198}
									height={108}
									className="object-cover mb-4 w-[198px] h-[108px] justify-self-center"
								/>
							)}
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label>Title</label>
								<input
									className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
									type="text"
									placeholder="Provide title"
									{...register('title', { required: true })}
								/>
							</div>
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label>Description</label>
								<input
									className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
									type="text"
									placeholder="Provide description"
									{...register('description', { required: true })}
								/>
							</div>
						</>
					) : formState == 1 ? (
						<>
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label htmlFor="category-selected-category">Category</label>
								<div className="relative w-full">
									<select
										id="category-selected-category"
										className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
										defaultValue="category-selected-category"
										{...register('id', { required: true })}
										onChange={e => {
											setSelectedCategory(
												categoryData?.data.find(
													item => String(item.id) == e.target.value
												)
											)
											setPreviewImage(
												filesData?.data.find(
													item =>
														item.fileUrl ==
														categoryData?.data.find(
															item => String(item.id) == e.target.value
														)?.imagePath
												)
											)
										}}
									>
										<option value="category-selected-category" disabled hidden>
											--select option--
										</option>
										{categoryData?.data.map(item => (
											<option key={item.id} value={item.id}>
												{item.title}
											</option>
										))}
									</select>
									<CgSelect className="absolute right-2 bottom-3.5" />
								</div>
							</div>
							{selectedCategory && previewImage && (
								<>
									<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
										<label
											htmlFor="category-selected-category-update"
											className="block text-gray-400 font-semibold mb-2"
										>
											Image
										</label>
										<div className="relative w-full">
											<select
												id="category-selected-category-update"
												className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
												{...register('imagePath', { required: true })}
												onChange={e =>
													setPreviewImage(
														filesData?.data.find(
															item => item.fileUrl === e.target.value
														)
													)
												}
											>
												{filesData?.data.map(item => (
													<option
														key={item.id}
														value={item.fileUrl}
														defaultChecked={
															item.fileUrl == previewImage.fileUrl
														}
													>
														{item.title}
													</option>
												))}
											</select>
											<CgSelect className="absolute right-2 bottom-3.5" />
										</div>
									</div>
									<Image
										alt={`${previewImage?.title}`}
										src={`${BACKEND_MAIN}${previewImage?.fileUrl}`}
										width={198}
										height={108}
										className="object-cover mb-4 w-[198px] h-[108px] justify-self-center"
									/>
									<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
										<label>Title</label>
										<input
											className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
											type="text"
											placeholder={selectedCategory?.title}
											{...register('title', { required: true })}
										/>
									</div>
									<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
										<label>Description</label>
										<input
											className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
											type="text"
											placeholder="Provide description"
											{...register('description', { required: true })}
										/>
									</div>
								</>
							)}
						</>
					) : (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label htmlFor="category-delete-category">Category</label>
							<div className="relative w-full">
								<select
									id="category-delete-category"
									className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
									defaultValue="category-delete-category"
									{...register('id', { required: true })}
								>
									<option value="category-delete-category" disabled hidden>
										--select option--
									</option>
									{categoryData?.data.map(item => (
										<option key={item.id} value={item.id}>
											{item.title}
										</option>
									))}
								</select>
								<CgSelect className="absolute right-2 bottom-3.5" />
							</div>
						</div>
					)}

					<div className="mb-3">
						<button
							type="submit"
							className={twMerge(
								'bg-zinc-100 min-w-[252px] sm:min-w-[384px] py-3 rounded-xl text-zinc-950 font-bold',
								isLoading && 'opacity-75 cursor-not-allowed'
							)}
							disabled={isLoading}
						>
							{isLoading ? (
								<MiniLoader />
							) : formState == 0 ? (
								'Create'
							) : formState == 1 ? (
								'Update'
							) : (
								'Delete'
							)}
						</button>
					</div>
				</form>
			</section>
		</>
	)
}
