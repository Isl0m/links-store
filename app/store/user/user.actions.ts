import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword, IRegister } from './user.interface'
import { toast } from 'react-toastify'
import { toastError } from '@/utils/toast-error'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'auth/register',
	async ({ email, password, name, profession, surname }, thunkApi) => {
		try {
			const res = await AuthService.register(
				email,
				password,
				name,
				profession,
				surname
			)
			toast.success('Registration')
			return res.data
		} catch (error) {
			// toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const res = await AuthService.login(email, password)
			toast.success('Login')
			return res.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const res = await AuthService.getNewTokens()
			return res.data
		} catch (error) {
			if (toastError(error) === 'jwt expired') {
				toast.error(
					// 'Logout',
					'Yout authorization is finished, plz sign in again'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
