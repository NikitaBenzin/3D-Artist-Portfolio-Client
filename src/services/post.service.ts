import { axiosClassic, instance } from '@/api/axios'
import { IFirstPosts, IPosts } from '@/types/posts.types'

class PostsService {
	private _POSTS_URL_ = '/posts'

	async fetchPosts() {
		return axiosClassic.get<IPosts[]>(`${this._POSTS_URL_}`)
	}
	async createPost(data: IPosts) {
		return instance.post(`${this._POSTS_URL_}`, { data })
	}
	async updatePost(data: IPosts) {
		return instance.put(`${this._POSTS_URL_}`, { data })
	}
	async deletePost(data: IPosts) {
		const id = data.id
		return instance.delete(`${this._POSTS_URL_}`, { params: { id } })
	}

	async getPostsByCategory(categoryName: string) {
		return axiosClassic.get<IPosts[]>(
			`${this._POSTS_URL_}/category/${categoryName}`
		)
	}

	async getFirstPostsByCategory() {
		return axiosClassic.get<IFirstPosts[]>(
			`${this._POSTS_URL_}/preview-category`
		)
	}
}

export default new PostsService()
