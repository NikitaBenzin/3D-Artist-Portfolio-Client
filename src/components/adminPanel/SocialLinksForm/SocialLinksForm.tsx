'use client'

import { useLinkForm } from '@/components/adminPanel/SocialLinksForm/useLinksForm'
import socialLinksService from '@/services/socialLinks.service'
import { useQuery } from '@tanstack/react-query'
import { twMerge } from 'tailwind-merge'
import { MiniLoader } from '../../ui/MiniLoader'

export function SocialLinksForm() {
	const { handleSubmit, isLoading, onSubmit } = useLinkForm(false)

	const { data, isLoading: isLoadingData } = useQuery({
		queryKey: ['get-social-links'],
		queryFn: () => socialLinksService.getSocialLinks()
	})

	if (isLoading || isLoadingData)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)

	return (
		<>
			<h2 className="text-2xl font-bold mb-4">Social Links</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
				{data?.data.map(item => {
					return <div>{item.artStationLink}</div>
				})}
				<div className="mb-4 flex items-center space-x-4">
					<label>Link</label>
					<input
						className="bg-zinc-900 border border-zinc-800 w-full rounded-xl p-2 focus:outline-none"
						type="url"
						placeholder="https://pornhub.com"
						pattern="https://.*"
						required
					/>
				</div>

				<div className="mb-3">
					<button
						type="submit"
						className={twMerge(
							'bg-zinc-100 w-full py-3 rounded-xl text-zinc-950 font-bold',
							isLoading && 'opacity-75 cursor-not-allowed'
						)}
						disabled={isLoading}
					>
						{isLoading ? <MiniLoader /> : 'Submit'}
					</button>
				</div>
			</form>
		</>
	)
}
