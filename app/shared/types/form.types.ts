import {
	FieldError,
	FieldName,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form'

export interface IFieldProps {
	label: string
	name: FieldName<any>
	placeholder: string
	error?: FieldError | undefined
	register: UseFormRegister<any>
	options?: RegisterOptions
	type?: string
}
