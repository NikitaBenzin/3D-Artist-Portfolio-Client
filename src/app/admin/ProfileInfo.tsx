'use client'
import { MiniLoader } from '@/components/ui/MiniLoader'
import { PUBLIC_PAGES } from '@/config/pages/public.pages'
import { useProfile } from '@/hooks/useProfile'
import authService from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { twMerge } from 'tailwind-merge'

export function ProfileInfo() {
	const router = useRouter()

	const { isLoading, refetch, user } = useProfile()

	const [isPending, startTransition] = useTransition()

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			refetch()
			startTransition(() => {
				router.push(PUBLIC_PAGES.LOGIN)
			})
		}
	})
	const isLogoutLoading = isLogoutPending || isPending

	if (isLoading)
		return (
			<div className="mt-10">
				<MiniLoader width={150} height={150} />
			</div>
		)

	return (
		<div className="mt-10">
			{user.avatarPath && (
				<Image
					src={user.avatarPath}
					alt="Avatar"
					width={70}
					height={70}
					className="rounded-xl mb-6"
				/>
			)}
			<h2 className="text-2xl font-bold">Hi, {user.name || 'Anonym'}</h2>
			<br />
			<p>Email: {user.email}</p>
			<br />
			<p>Phone: {user.phone ? user.phone : 'Unknown'}</p>
			<br />
			<p>Rights: {user.rights?.join(', ')}</p>
			<br />
			<button
				onClick={() => mutateLogout()}
				disabled={isLogoutLoading}
				className={twMerge(
					'mt-2 bg-primary text-white px-4 py-2 rounded-md',
					isLogoutLoading && 'bg-gray-500'
				)}
			>
				{isLogoutLoading ? <MiniLoader /> : 'Logout'}
			</button>
		</div>
	)
}
