'use client'

import { fileService } from '@/services/file.service'
import { IFiles } from '@/types/files.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FormState } from '../SocialLinksForm/SocialLinksForm'

export function useFileForm(formState: FormState) {
	const { register, handleSubmit, reset } = useForm<IFiles>()

	const [isPending, startTransition] = useTransition()

	const { mutate: deleteMutateFiles, isPending: isdeleteDataPending } =
		useMutation({
			mutationKey: ['delete-file'],
			mutationFn: (data: IFiles) => fileService.deleteFile(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('File deleted!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})

	const onSubmit: SubmitHandler<IFiles> = data => {
		if (formState == 2) deleteMutateFiles(data)
	}

	const isLoading = isPending || isdeleteDataPending

	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
