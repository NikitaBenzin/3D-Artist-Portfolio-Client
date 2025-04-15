'use client'

import postService from '@/services/post.service'
import { IPosts } from '@/types/posts.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FormState } from '../SocialLinksForm/SocialLinksForm'

export function usePostForm(formState: FormState) {
	const { register, handleSubmit, reset } = useForm<IPosts>()

	const [isPending, startTransition] = useTransition()

	const { mutate: updateMutatePosts, isPending: isDataPending } = useMutation({
		mutationKey: ['update-post'],
		mutationFn: (data: IPosts) => postService.updatePost(data),
		onSuccess() {
			startTransition(() => {
				reset()
				toast.success('Post updated!')
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})
	const { mutate: createMutatePosts, isPending: isCreateDataPending } =
		useMutation({
			mutationKey: ['create-post'],
			mutationFn: (data: IPosts) => postService.createPost(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Post created!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})
	const { mutate: deleteMutatePosts, isPending: isdeleteDataPending } =
		useMutation({
			mutationKey: ['delete-post'],
			mutationFn: (data: IPosts) => postService.deletePost(data),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Post deleted!')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
				}
			}
		})

	const onSubmit: SubmitHandler<IPosts> = data => {
		if (formState == 0) createMutatePosts(data)
		else if (formState == 1) updateMutatePosts(data)
		else deleteMutatePosts(data)
	}

	const isLoading = isPending || isDataPending || isCreateDataPending

	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
