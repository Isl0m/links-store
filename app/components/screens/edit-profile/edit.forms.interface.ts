import {
	Control,
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from 'react-hook-form'

import { IDetail, ILink, ITag } from '@/shared/types/profile.types'

import { IEmailPassword } from '@/store/user/user.interface'

export interface EditProfile {
	profile: {
		name: string
		surname?: string
		profession: string
	}
	user: IEmailPassword
	detail: IDetail
	link: ILink
	tags: ITag[]
}

export interface EditFieldProps<T extends FieldValues> {
	register: UseFormRegister<EditProfile>
	errors?: FieldErrors<T> | undefined
}

export interface EditFieldWithControl<T extends FieldValues>
	extends EditFieldProps<T> {
	control: Control<EditProfile>
}
