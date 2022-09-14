import { FC, useEffect, useState } from 'react'
import { ActionMeta, OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'

import { createOption } from '@/shared/create-option'

import s from './Select.module.scss'
import { IOption, ISelect } from './select.interface'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	placeholder,
	error,
	isCreatable = false,
	label,
	defaultOptions,
	field,
	isLoading,
}) => {
	const getOptions = () => {
		if (!defaultOptions) return []
		return defaultOptions.map(item => createOption(item))
	}
	const [value, setValue] = useState<IOption | null>()
	const [options, setOptions] = useState<IOption[]>(getOptions)

	useEffect(() => {
			if (field.value && !value) {
			setValue(createOption(field.value))
		}
	}, [field.value, isLoading])

	const handleChange = (
		newValue: OnChangeValue<IOption, false>,
		actionMeta: ActionMeta<IOption>
	) => {
		setValue(newValue)
		field.onChange(newValue ? (newValue as IOption).label : '')
	}

	const handleCreate = (inputValue: string) => {
		const newOption = createOption(inputValue)
		//@ts-ignore
		setOptions([...options, newOption])
		setValue(newOption)
	}

	return (
		<div className={s.selectContainer}>
			<label>
				<span>{label}</span>
				<CreatableSelect
					classNamePrefix="custom-select"
					placeholder={placeholder}
					isCreatable={isCreatable}
					isDisabled={isLoading}
					isLoading={isLoading}
					//@ts-ignore
					onChange={handleChange}
					onCreateOption={handleCreate}
					options={options}
					value={value}
					components={animatedComponents}
				/>
			</label>
			{error && <div className={s.error}>{error.message}</div>}
		</div>
	)
}
export default Select
