'use client'

import { Dispatch, SetStateAction, useId, useState } from 'react'

import { MiniLoader } from '@/components/ui/MiniLoader'
import { StateToggle } from '@/components/ui/StateToggle'
import { BACKEND_MAIN } from '@/constants'
import { fileService } from '@/services/file.service'
import { IFiles } from '@/types/files.types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { CgSelect } from 'react-icons/cg'
import { FiUploadCloud } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import { FormState } from '../SocialLinksForm/SocialLinksForm'
import { useFileForm } from './useFileForm'
import { useUpload } from './useUploads'

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function FilesForm({ isOpen, setIsOpen }: Props) {
	const [formState, setFormState] = useState<FormState>(FormState.CREATE)
	const [imagePreview, setImagePreview] = useState<IFiles>()

	const {
		register,
		handleSubmit,
		isLoading: isLoadingFileForm,
		onSubmit
	} = useFileForm(formState)
	const { isLoading, uploadFile } = useUpload()
	const inputId = useId()

	const { data, isLoading: isLoadingData } = useQuery({
		queryKey: ['get-files-in-form'],
		queryFn: () => fileService.fetchFiles()
	})

	if (isLoadingFileForm || isLoadingData)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)

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
				<h2 className="text-2xl font-bold mb-4">Files</h2>
				<StateToggle formState={formState} setFormState={setFormState} />
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
					{formState == 0 ? (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label
								htmlFor={inputId}
								className="block text-gray-400 font-semibold mb-2"
							>
								Image
							</label>

							<label
								htmlFor={inputId}
								className="flex items-center px-4 py-2 bg-transparent text-primary rounded-lg shadow-md cursor-pointer hover:bg-primary hover:text-white border border-primary transition-colors w-max"
							>
								<FiUploadCloud className="mr-2" />
								Upload
							</label>

							<input
								id={inputId}
								type="file"
								onChange={uploadFile}
								accept="image/*"
								className="hidden"
							/>
						</div>
					) : (
						formState == 2 && (
							<>
								<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
									<label
										htmlFor="platform"
										className="block text-gray-400 font-semibold mb-2"
									>
										Image
									</label>
									<div className="relative w-full">
										<select
											id="platform"
											className="appearance-none min-w-[252px] bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
											{...register('id', { required: true })}
											onChange={e =>
												setImagePreview(
													data?.data.find(item => item.id === e.target.value)
												)
											}
										>
											{data?.data.map(item => (
												<option key={item.id} value={item.id}>
													{item.title}
												</option>
											))}
										</select>
										<CgSelect className="absolute right-2 bottom-3.5" />
									</div>
								</div>
								{imagePreview && (
									<Image
										alt={`${imagePreview?.title}`}
										src={`${BACKEND_MAIN}${imagePreview?.fileUrl}`}
										width={198}
										height={108}
										className="w-full object-contain mb-4"
									/>
								)}
							</>
						)
					)}

					<div className="mb-3">
						<button
							type="submit"
							className={twMerge(
								'bg-zinc-100 min-w-[252px] sm:min-w-[384px] py-3 cursor-pointer rounded-xl text-zinc-950 font-bold',
								isLoading && 'opacity-75 cursor-not-allowed',
								formState != 2 && 'bg-zinc-400 cursor-not-allowed'
							)}
							disabled={isLoading || formState != 2}
						>
							{isLoadingFileForm ? (
								<MiniLoader />
							) : formState == 0 ? (
								'Upload a file'
							) : formState == 1 ? (
								"Can't update"
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
