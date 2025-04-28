'use client'

import {
	default as categoryervice,
	default as categoryService
} from '@/services/category.service'
import { ICategory } from '@/types/category.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FormState } from '../SocialLinksForm/SocialLinksForm'

export function useCategoryForm(formState: FormState) {
	const { register, handleSubmit, reset } = useForm<ICategory>()

	const [isPending, startTransition] = useTransition()

	const { mutate: updateMutateCategory, isPending: isDataPending } =
		useMutation({
			mutationKey: ['update-category'],
			mutationFn: (data: ICategory) => categoryService.updateCategory(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Category updated!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})
	const { mutate: createMutateCategory, isPending: isCreateDataPending } =
		useMutation({
			mutationKey: ['create-category'],
			mutationFn: (data: ICategory) => categoryervice.createCategory(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Category created!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})
	const { mutate: deleteMutateCategory, isPending: isdeleteDataPending } =
		useMutation({
			mutationKey: ['delete-category'],
			mutationFn: (data: ICategory) => categoryervice.deleteCategory(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Category deleted!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})

	const onSubmit: SubmitHandler<ICategory> = data => {
		if (formState == 0) createMutateCategory(data)
		else if (formState == 1) updateMutateCategory(data)
		else deleteMutateCategory(data)
	}

	const isLoading = isPending || isDataPending || isCreateDataPending

	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
