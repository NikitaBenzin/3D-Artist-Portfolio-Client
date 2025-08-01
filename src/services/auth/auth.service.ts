import { axiosClassic } from '@/api/axios'
import { IFormData } from '@/types/auth.types'
import { IUser } from '@/types/user.types'
import authTokenService from './auth-token.service'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	async main(
		type: 'login' | 'register',
		data: IFormData,
		recaptchaToken?: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data,
			{
				headers: {
					recaptcha: recaptchaToken
				}
			}
		)

		if (response.data.accessToken) {
			authTokenService.saveAccessToken(response.data.accessToken)
		}

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token'
		)

		if (response.data.accessToken)
			authTokenService.saveAccessToken(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) authTokenService.removeAccessToken()

		return response
	}
}

export default new AuthService()
