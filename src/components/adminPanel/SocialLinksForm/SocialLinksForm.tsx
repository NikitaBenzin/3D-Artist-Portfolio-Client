'use client'

import { useLinkForm } from '@/components/adminPanel/SocialLinksForm/useLinksForm'
import { StateToggle } from '@/components/ui/StateToggle'
import socialLinksService from '@/services/socialLinks.service'
import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useState } from 'react'
import { CgSelect } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'
import { MiniLoader } from '../../ui/MiniLoader'

export enum FormState {
	CREATE,
	UPDATE,
	DELETE
}

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function SocialLinksForm({ isOpen, setIsOpen }: Props) {
	const [formState, setFormState] = useState<FormState>(FormState.CREATE)
	const { register, handleSubmit, isLoading, onSubmit } = useLinkForm(formState)

	const { data, isLoading: isLoadingData } = useQuery({
		queryKey: ['get-social-links'],
		queryFn: () => socialLinksService.getSocialLinks()
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
				<h2 className="text-2xl font-bold mb-4">Social Links</h2>
				<StateToggle formState={formState} setFormState={setFormState} />
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
					{isLoading || isLoadingData ? (
						<div className="mt-10">
							<MiniLoader width={150} height={150} />
						</div>
					) : formState == 0 ? (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label>SocialMedia</label>
							<input
								className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
								type="text"
								placeholder="Provide social media"
								{...register('socialMedia', { required: true })}
							/>
						</div>
					) : formState == 1 ? (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label htmlFor="social-selected-update">SocialMedia</label>
							<div className="relative w-full">
								<select
									id="social-selected-update"
									className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
									defaultValue="selected"
									{...register('id', { required: true })}
								>
									<option value="selected" disabled hidden>
										--select option--
									</option>
									{data?.data.map(item => (
										<option key={item.id} value={item.id}>
											{item.socialMedia}
										</option>
									))}
								</select>
								<CgSelect className="absolute right-2 bottom-3.5" />
							</div>
						</div>
					) : (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label htmlFor="social-selected-delete">SocialMedia</label>
							<div className="relative w-full">
								<select
									id="social-selected-delete"
									className="appearance-none w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 focus:outline-none"
									defaultValue="selected"
									{...register('id', { required: true })}
								>
									<option value="selected" disabled hidden>
										--select option--
									</option>
									{data?.data.map(item => (
										<option key={item.id} value={item.id}>
											{item.socialMedia}
										</option>
									))}
								</select>
								<CgSelect className="absolute right-2 bottom-3.5" />
							</div>
						</div>
					)}
					{formState != 2 && (
						<div className="mb-4 flex space-x-4 flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-0">
							<label>Link</label>
							<input
								className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
								type="url"
								placeholder="Provide link"
								pattern="https://.*"
								{...register('link', { required: true })}
							/>
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
