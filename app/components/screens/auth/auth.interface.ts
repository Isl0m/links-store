import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface ILoginInput {
	email: string
	password: string
}

export interface IRegisterInput extends ILoginInput {
	name: string
	surname?: string
	profession: string
}

export interface IRegisterStepsProps {
	register: UseFormRegister<IRegisterInput>
	errors: FieldErrors<IRegisterInput>
}
