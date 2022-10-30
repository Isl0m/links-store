import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokensFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { API_SERVER_URL, API_URL, APP_FAST_SERVER_URL } from '@/configs/api.config'
import { IS_PRODUCTION } from '@/configs/constants'

import { errorCatch, getContentType } from './api.helpers'

const axiosBaseUrl = IS_PRODUCTION ? API_SERVER_URL : API_URL;

export const axiosFast = axios.create({
	baseURL: APP_FAST_SERVER_URL, 
	headers: getContentType(),
})

export const axiosClassic = axios.create({
	baseURL: axiosBaseUrl,
	headers: getContentType(),
})

export const instance = axios.create({
	baseURL: axiosBaseUrl,
	headers: getContentType(),
})

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensFromStorage()
			}
		}

		throw error
	}
)

export default instance
