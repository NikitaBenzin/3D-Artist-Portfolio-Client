import { instance } from '@/api/axios'
import { IProfileForm, IUser } from '@/types/user.types'

class UserService {
	private _ADMIN_URL = '/admin'

	async fetchProfile() {
		return instance.get<IUser>(`${this._ADMIN_URL}/profile`)
	}
	async updateProfile(data: IProfileForm) {
		return instance.put(`${this._ADMIN_URL}/profile`, { data })
	}
}

export default new UserService()
