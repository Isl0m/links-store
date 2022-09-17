export interface IDetail {
	age: number
	gender: string
	country: string
	biography: string
	profileId: string
	// Optional
	birthDay?: string
	city?: string
}

export interface ILink {
	social: string[]
	background: string
	portfolio?: string[]
	avatar?: string
	CV?: string
}

export interface ITag {
	name: string
	profiles: string[]
}

export interface IProfile {
	_id: string
	name: string
	surname?: string
	profession: string
	countOpened: number
	detail: IDetail
	link: ILink
	tags: ITag[]
}

export interface IResProfile {
	profile: IProfile
}
