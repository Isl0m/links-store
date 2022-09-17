import axios, { axiosClassic } from 'api/interceptors'

import { EditProfile } from '@/screens/editProfile/edit.forms.interface'

import { IProfile } from '@/shared/types/profile.types'

import { getProfileApi } from '@/configs/api.config'

export const ProfileService = {
	async getById(id: string) {
		return axiosClassic.get<IProfile>(getProfileApi(`/${id}`))
	},
	async getByUser() {
		return axios.post<IProfile>(getProfileApi(`/by-user`))
	},
	async update(data: EditProfile) {
		return axios.put<any>(getProfileApi(''), data)
	},
}
