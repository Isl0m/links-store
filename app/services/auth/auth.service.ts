import { getContentType } from 'api/api.helpers'
import { axiosClassic } from 'api/interceptors'
import Cookies from 'js-cookie'

import { getAuthApi } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensFromStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(
		email: string,
		password: string,
		name: string,
		profession: string,
		surname?: string
	) {
		const res = await axiosClassic.post<IAuthResponse>(
			getAuthApi('/register'),
			{ email, password, name, profession, surname }
		)

		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res
	},
	async login(email: string, password: string) {
		const res = await axiosClassic.post<IAuthResponse>('/login', {
			email,
			password,
		})
		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res
	},
	logout() {
		removeTokensFromStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const res = await axiosClassic.post<IAuthResponse>(
			getAuthApi('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res
	},
}
