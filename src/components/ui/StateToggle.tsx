import { Dispatch, SetStateAction } from 'react'
import { FormState } from '../adminPanel/SocialLinksForm/SocialLinksForm'

interface Props {
	formState: FormState
	setFormState: Dispatch<SetStateAction<FormState>>
}

export function StateToggle({ formState, setFormState }: Props) {
	return (
		<div className="flex justify-center mb-6 flex-col sm:flex-row gap-2 sm:gap-0">
			<button
				type="button"
				className={`px-4 py-2 font-semibold ${
					formState == 0
						? 'text-primary border-b-2 border-primary'
						: 'text-gray-600'
				}`}
				onClick={() => setFormState(0)}
			>
				Create
			</button>
			<button
				type="button"
				className={`px-4 py-2 font-semibold ${
					formState == 1
						? 'text-primary border-b-2 border-primary'
						: 'text-gray-600'
				}`}
				onClick={() => setFormState(1)}
			>
				Update
			</button>
			<button
				type="button"
				className={`px-4 py-2 font-semibold ${
					formState == 2
						? 'text-primary border-b-2 border-primary'
						: 'text-gray-600'
				}`}
				onClick={() => setFormState(2)}
			>
				Delete
			</button>
		</div>
	)
}
