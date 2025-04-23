export interface IPosts {
	id?: string
	title?: string
	imagePath?: string
	categoryName?: string
}

export interface IFirstPosts {
	_min: {
		id?: string
		title?: string
		imagePath?: string
		categoryName?: string
	}
}
