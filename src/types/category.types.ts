import { IPosts } from './posts.types'

export interface ICategory {
	id?: number
	title?: string
	imagePath?: string
	description?: string
	posts?: IPosts[]
}
