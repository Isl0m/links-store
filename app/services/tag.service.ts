import { axiosClassic } from 'api/interceptors'

import { ITag } from '@/shared/types/profile.types'

import { getTagApi } from '@/configs/api.config'

export const TagService = {
	async getAll() {
		return axiosClassic.get<ITag[]>(getTagApi(''))
	},
}
