import { UserRole } from './auth.types'

export interface IUser {
	id: number
	email: string
	phone: string
	name: string
	password: string
	avatarPath: string
	rights: UserRole[]
}

export interface IProfileForm {
	email?: string | null
	phone?: string | null
	name?: string | null
	password?: string | null
	avatarPath?: string | null
}
