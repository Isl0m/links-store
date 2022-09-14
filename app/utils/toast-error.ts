import { errorCatch } from 'api/api.helpers'
import { toast } from 'react-toastify'

export const toastError = (error: any, title?: string) => {
	const msg = errorCatch(error)
	toast.error(title || msg)
	throw msg
}
