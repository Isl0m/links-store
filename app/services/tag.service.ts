import { axiosClassic, axiosFast } from 'api/interceptors'

import { ITag, ITagPopulated } from '@/shared/types/profile.types'

import { getTagApi } from '@/configs/api.config'

export const TagService = {
	async getAll() {
		return axiosFast.get<ITag[]>(getTagApi(''))
	},
	async getByName(name: string) {
		return axiosClassic.get<ITagPopulated[]>(getTagApi(`/by-name/${name}`))
	},
}
