'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ProfileInfo } from './ProfileInfo'

const DynamicFilesForm = dynamic(
	() =>
		import('@/components/adminPanel/FilesForm/FilesForm').then(
			mod => mod.FilesForm
		),
	{ ssr: false, loading: () => <MiniLoader width={150} height={150} /> }
)
const DynamicPostsForm = dynamic(
	() =>
		import('@/components/adminPanel/PostsForm/PostsForm').then(
			mod => mod.PostsForm
		),
	{ ssr: false, loading: () => <MiniLoader width={150} height={150} /> }
)
const DynamicSocialLinksForm = dynamic(
	() =>
		import('@/components/adminPanel/SocialLinksForm/SocialLinksForm').then(
			mod => mod.SocialLinksForm
		),
	{ ssr: false, loading: () => <MiniLoader width={150} height={150} /> }
)

export default function Page() {
	const [isSocialLinksOpen, setIsSocialLinksOpen] = useState(false)
	const [isPostsOpen, setIsPostsOpen] = useState(false)
	const [isFileOpen, setIsFileOpen] = useState(false)

	return (
		<div className="flex flex-col gap-6 mx-4">
			<section>
				<ProfileInfo />
			</section>
			<button
				onClick={() => setIsSocialLinksOpen(true)}
				className={
					'bg-zinc-100 w-full cursor-pointer py-3 rounded-xl text-zinc-950 font-bold'
				}
			>
				Open Social Links
			</button>
			{isSocialLinksOpen && (
				<DynamicSocialLinksForm
					isOpen={isSocialLinksOpen}
					setIsOpen={setIsSocialLinksOpen}
				/>
			)}
			<section>
				<button
					onClick={() => setIsPostsOpen(true)}
					className={
						'bg-zinc-100 w-full cursor-pointer py-3 rounded-xl text-zinc-950 font-bold'
					}
				>
					Open Posts
				</button>
				{isPostsOpen && (
					<DynamicPostsForm isOpen={isPostsOpen} setIsOpen={setIsPostsOpen} />
				)}
			</section>
			<section>
				<button
					onClick={() => setIsFileOpen(true)}
					className={
						'bg-zinc-100 w-full cursor-pointer py-3 rounded-xl text-zinc-950 font-bold'
					}
				>
					Open Files
				</button>
				{isFileOpen && (
					<DynamicFilesForm isOpen={isFileOpen} setIsOpen={setIsFileOpen} />
				)}
			</section>
		</div>
	)
}
