'use client'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'
import { IFormData } from '@/types/auth.types'
import { ISocialLinks } from '@/types/socialLinks.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function useLinkForm(isLogin: boolean) {
	const { handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) =>
			// request
			authService.main('login', data, null),
		onSuccess() {
			startTransition(() => {
				reset()
				router.push(PUBLIC_PAGES.HOME)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit: SubmitHandler<ISocialLinks> = data => {
		if (isLogin) {
			// mutateLogin(data)
		}
	}

	const isLoading = isPending || isLoginPending

	return {
		handleSubmit,
		onSubmit,
		isLoading
	}
}
