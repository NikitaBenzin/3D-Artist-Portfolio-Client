export interface IPosts {
	id?: string
	title?: string
	imagePath?: string
	categoryId?: number
}

export interface IFirstPosts {
	_min: {
		id?: string
		title?: string
		imagePath?: string
		categoryId?: number
	}
}
