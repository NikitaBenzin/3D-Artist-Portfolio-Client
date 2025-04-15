import { axiosClassic, instance } from '@/api/axios'
import { IFiles } from '@/types/files.types'

class FileService {
	private _FILES_URL_ = '/files'

	async fetchFiles() {
		return axiosClassic.get<IFiles[]>(`${this._FILES_URL_}`)
	}
	async upload(file: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>(`/files`, file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
	async deleteFile(data: IFiles) {
		const id = data.id
		return instance.delete(`${this._FILES_URL_}`, { params: { id } })
	}
}

export const fileService = new FileService()
