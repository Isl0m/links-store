import { FieldError } from 'react-hook-form'

export interface IFileInput {
	folder?: string
	file?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	isVideo?: boolean
}
