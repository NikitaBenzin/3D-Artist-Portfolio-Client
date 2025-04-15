'use client'

import socialLinksService from '@/services/socialLinks.service'
import { ISocialLinks } from '@/types/socialLinks.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FormState } from './SocialLinksForm'

export function useLinkForm(formState: FormState) {
	const { register, handleSubmit, reset } = useForm<ISocialLinks>()

	const [isPending, startTransition] = useTransition()

	const { mutate: updateMutateLinks, isPending: isDataPending } = useMutation({
		mutationKey: ['update-social-links'],
		mutationFn: (data: ISocialLinks) =>
			socialLinksService.updateSocialLink(data),
		onSuccess() {
			startTransition(() => {
				reset()
				toast.success('Link updated!')
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})
	const { mutate: createMutateLinks, isPending: isCreateDataPending } =
		useMutation({
			mutationKey: ['create-social-links'],
			mutationFn: (data: ISocialLinks) =>
				socialLinksService.createSocialLink(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Link created!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})
	const { mutate: deleteMutateLinks, isPending: isdeleteDataPending } =
		useMutation({
			mutationKey: ['delete-social-links'],
			mutationFn: (data: ISocialLinks) =>
				socialLinksService.deleteSocialLink(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Link deleted!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})

	const onSubmit: SubmitHandler<ISocialLinks> = data => {
		if (formState == 0) createMutateLinks(data)
		else if (formState == 1) updateMutateLinks(data)
		else deleteMutateLinks(data)
	}

	const isLoading = isPending || isDataPending || isCreateDataPending

	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
