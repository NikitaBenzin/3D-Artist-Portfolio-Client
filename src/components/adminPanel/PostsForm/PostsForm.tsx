'use client'

import { StateToggle } from '@/components/ui/StateToggle'
import { BACKEND_MAIN } from '@/constants'
import { fileService } from '@/services/file.service'
import postService from '@/services/post.service'
import { IFiles } from '@/types/files.types'
import { IPosts } from '@/types/posts.types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { CgSelect } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'
import { MiniLoader } from '../../ui/MiniLoader'
import { FormState } from '../SocialLinksForm/SocialLinksForm'
import { usePostForm } from './usePostsForm'

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function PostsForm({ isOpen, setIsOpen }: Props) {
	const [formState, setFormState] = useState<FormState>(FormState.CREATE)
	const { register, handleSubmit, isLoading, onSubmit } = usePostForm(formState)
	const [selectedPost, setSelectedPost] = useState<IPosts>()
	const [previewImage, setPreviewImage] = useState<IFiles>()

	const { data, isLoading: isLoadingData } = useQuery({
		queryKey: ['get-posts-in-form'],
		queryFn: () => postService.fetchPosts()
	})

	const { data: filesData, isLoading: isLoadingFilesData } = useQuery({
		queryKey: ['get-files-in-form'],
		queryFn: () => fileService.fetchFiles()
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
				<h2 className="text-2xl font-bold mb-4">Posts</h2>
				<StateToggle formState={formState} setFormState={setFormState} />
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
					{isLoading || isLoadingData || isLoadingFilesData ? (
						<div className="mt-10">
							<MiniLoader width={150} height={150} />
						</div>
					) : formState == 0 ? (
						<>
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label
									htmlFor="post-selected-image"
									className="block text-gray-400 font-semibold mb-2"
								>
									Image
								</label>
								<div className="relative w-full">
									<select
										id="post-selected-image"
										className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
										defaultValue="post-selected-image"
										{...register('imagePath', { required: true })}
										onChange={e =>
											setPreviewImage(
												filesData?.data.find(
													item => item.fileUrl === e.target.value
												)
											)
										}
									>
										<option value="post-selected-image" disabled hidden>
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
								<label>Category</label>
								<input
									className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
									type="text"
									placeholder="Provide category name"
									{...register('categoryName', { required: true })}
								/>
							</div>
						</>
					) : formState == 1 ? (
						<>
							<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
								<label htmlFor="post-selected-post">Post</label>
								<div className="relative w-full">
									<select
										id="post-selected-post"
										className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
										defaultValue="post-selected-post"
										{...register('id', { required: true })}
										onChange={e => {
											setSelectedPost(
												data?.data.find(item => item.id == e.target.value)
											)
											setPreviewImage(
												filesData?.data.find(
													item =>
														item.fileUrl ==
														data?.data.find(item => item.id == e.target.value)
															?.imagePath
												)
											)
										}}
									>
										<option value="post-selected-post" disabled hidden>
											--select option--
										</option>
										{data?.data.map(item => (
											<option key={item.id} value={item.id}>
												{item.title}
											</option>
										))}
									</select>
									<CgSelect className="absolute right-2 bottom-3.5" />
								</div>
							</div>
							{selectedPost && previewImage && (
								<>
									<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
										<label
											htmlFor="post-selected-post-update"
											className="block text-gray-400 font-semibold mb-2"
										>
											Image
										</label>
										<div className="relative w-full">
											<select
												id="post-selected-post-update"
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
											placeholder={selectedPost?.title}
											{...register('title', { required: true })}
										/>
									</div>
									<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
										<label>Category</label>
										<input
											className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
											type="text"
											placeholder={selectedPost?.categoryName}
											{...register('categoryName', { required: true })}
										/>
									</div>
								</>
							)}
						</>
					) : (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label htmlFor="post-delete-post">Post</label>
							<div className="relative w-full">
								<select
									id="post-delete-post"
									className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
									defaultValue="post-delete-post"
									{...register('id', { required: true })}
								>
									<option value="post-delete-post" disabled hidden>
										--select option--
									</option>
									{data?.data.map(item => (
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
