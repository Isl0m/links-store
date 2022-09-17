import axios, { axiosClassic } from 'api/interceptors'

import { EditProfile } from '@/screens/edit-profile/edit.forms.interface'

import { IProfile } from '@/shared/types/profile.types'

import { getProfileApi } from '@/configs/api.config'

export const ProfileService = {
	async getMostPopular() {
		return axiosClassic.post<IProfile[]>(getProfileApi('/most-popular'))
	},
	async getById(id: string) {
		return axiosClassic.get<IProfile>(getProfileApi(`/${id}`))
	},
	async getByUser() {
		return axios.post<IProfile>(getProfileApi(`/by-user`))
	},
	async update(data: EditProfile) {
		return axios.put<any>(getProfileApi(''), data)
	},
	async incCountOpened(id: string) {
		return axiosClassic.put<any>(getProfileApi(`/inc-count-opened/${id}`))
	},
}
