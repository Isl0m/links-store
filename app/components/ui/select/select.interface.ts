import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IFieldProps } from '@/shared/types/form.types'

export interface IOption {
	label: string
	value: string
	__isNew__?: boolean
}

export interface ISelect extends Partial<Omit<IFieldProps, 'options'>> {
	defaultOptions: string[]
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	isCreatable?: boolean
}
export interface ISelectInput extends Partial<Omit<IFieldProps, 'options'>> {
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
