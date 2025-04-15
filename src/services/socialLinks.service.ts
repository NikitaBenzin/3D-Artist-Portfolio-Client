import { axiosClassic, instance } from '@/api/axios'
import { ISocialLinks } from '@/types/socialLinks.types'

class SocialLinksService {
	private _SOCIALLINKS_URL = '/social-links'

	async getSocialLinks() {
		return axiosClassic.get<ISocialLinks[]>(`${this._SOCIALLINKS_URL}`)
	}
	async updateSocialLink(data: ISocialLinks) {
		return instance.put(`${this._SOCIALLINKS_URL}`, { data })
	}

	async createSocialLink(data: ISocialLinks) {
		return instance.post(`${this._SOCIALLINKS_URL}`, { data })
	}

	async deleteSocialLink(data: ISocialLinks) {
		const id = data?.id
		return instance.delete(`${this._SOCIALLINKS_URL}`, { params: { id } })
	}
}

export default new SocialLinksService()
