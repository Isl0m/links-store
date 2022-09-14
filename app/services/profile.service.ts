import axios, { axiosClassic } from 'api/interceptors'

import { EditProfile } from '@/screens/editProfile/edit.forms.interface'

import { IProfile } from '@/shared/types/profile.types'

import { getProfileUrl } from '@/configs/api.config'

export const ProfileService = {
	async getById(id: string) {
		return axiosClassic.get<IProfile>(getProfileUrl(`/${id}`))
	},
	async getByUser() {
		return axios.post<IProfile>(getProfileUrl(`/by-user`))
	},
	async update(data: EditProfile) {
		return axios.put<any>(getProfileUrl(''), data)
	},
}
