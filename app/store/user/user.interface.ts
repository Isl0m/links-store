import { IUser } from 'shared/types/user.types'

export interface IUserState {
	_id: string
	email: string
	isAdmin: boolean
	name: string
	surname?: string
	profession: string
	profileId: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IRegister extends IEmailPassword {
	name: string
	surname?: string
	profession: string
	profileId?: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		name: string
		surname?: string
		profession: string
		profileId: string
	}
}
