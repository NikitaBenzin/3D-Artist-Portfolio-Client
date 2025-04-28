import { axiosClassic, instance } from '@/api/axios'
import { ICategory } from '@/types/category.types'

class CategoryService {
	private _CATEGORY_URL_ = '/category'

	async fetchCategory() {
		return axiosClassic.get<ICategory[]>(`${this._CATEGORY_URL_}`)
	}
	async getCategoryById(categoryId: string) {
		return axiosClassic.get<ICategory>(`${this._CATEGORY_URL_}/${categoryId}`)
	}

	async updateCategory(data: ICategory) {
		return instance.put(`${this._CATEGORY_URL_}`, { data })
	}
	async createCategory(data: ICategory) {
		return instance.post(`${this._CATEGORY_URL_}`, { data })
	}
	async deleteCategory(data: ICategory) {
		const id = data.id
		return instance.delete(`${this._CATEGORY_URL_}`, { params: { id } })
	}
}

export default new CategoryService()
