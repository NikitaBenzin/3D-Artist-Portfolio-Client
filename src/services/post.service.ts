import { axiosClassic, instance } from '@/api/axios'
import { IPosts } from '@/types/posts.types'

class PostsService {
	private _POSTS_URL_ = '/posts'
	private _ADMIN_URL_ = '/admin/posts'

	async fetchPosts() {
		return axiosClassic.get<IPosts[]>(`${this._POSTS_URL_}`)
	}
	async createPost(data: IPosts) {
		return instance.post(`${this._ADMIN_URL_}`, { data })
	}
	async updatePost(data: IPosts) {
		return instance.put(`${this._ADMIN_URL_}`, { data })
	}
	async deletePost(id: number) {
		return instance.delete(`${this._ADMIN_URL_}`, { params: { id } })
	}

	async getPostsByCategory(categoryName: string) {
		return axiosClassic.get<IPosts[]>(`${this._POSTS_URL_}/${categoryName}`)
	}
}

export default new PostsService()
