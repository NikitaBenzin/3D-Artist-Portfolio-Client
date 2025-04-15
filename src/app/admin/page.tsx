'use client'

import { FilesForm } from '@/components/adminPanel/FilesForm/FilesForm'
import { PostsForm } from '@/components/adminPanel/PostsForm/PostsForm'
import { SocialLinksForm } from '@/components/adminPanel/SocialLinksForm/SocialLinksForm'
import { useState } from 'react'
import { ProfileInfo } from './ProfileInfo'

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
			{/* social links */}
			<SocialLinksForm
				isOpen={isSocialLinksOpen}
				setIsOpen={setIsSocialLinksOpen}
			/>
			<section>
				<button
					onClick={() => setIsPostsOpen(true)}
					className={
						'bg-zinc-100 w-full cursor-pointer py-3 rounded-xl text-zinc-950 font-bold'
					}
				>
					Open Posts
				</button>
				{/* posts */}
				<PostsForm isOpen={isPostsOpen} setIsOpen={setIsPostsOpen} />
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
				{/* files */}
				<FilesForm isOpen={isFileOpen} setIsOpen={setIsFileOpen} />
			</section>
		</div>
	)
}
