import { FC, memo } from 'react'

import { IFieldProps } from '@/shared/types/form.types'

import s from './Field.module.scss'

const Field: FC<IFieldProps> = props => {
	const {
		name,
		label,
		placeholder,
		register,
		options,
		error,
		type = 'text',
	} = props
	return (
		<div className={s.field}>
			<label>{label}</label>
			<input
				type={type}
				{...register(name, options)}
				placeholder={placeholder}
			/>
			{error && <div className={s.error}>{error.message}</div>}
		</div>
	)
}

export default memo(Field)
