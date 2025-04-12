import { instance } from '@/api/axios'
import { ISocialLinks } from '@/types/socialLinks.types'

class SocialLinksService {
	private _SOCIALLINKS_URL = '/social-links'

	async getSocialLinks() {
		return instance.get<ISocialLinks>(`${this._SOCIALLINKS_URL}`)
	}
	async updateSocialLinks(data: ISocialLinks) {
		return instance.put(`${this._SOCIALLINKS_URL}`, { data })
	}
}

export default new SocialLinksService()
