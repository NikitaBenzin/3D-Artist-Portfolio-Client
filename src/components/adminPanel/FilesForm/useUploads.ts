import { useMutation } from '@tanstack/react-query'
import { type ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/services/file.service'

type TUseUpload = () => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}

export const useUpload: TUseUpload = () => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => fileService.upload(data),
		onSuccess() {
			toast.success('File added!')
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			mutate(formData)
		},
		[mutate]
	)

	return {
		uploadFile,
		isLoading: isPending
	}
}
