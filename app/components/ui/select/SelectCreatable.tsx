import { FC, useEffect, useState } from 'react'
import { ActionMeta, OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'

import { createOption } from '@/shared/create-option'
import { ITag } from '@/shared/types/profile.types'

import s from './Select.module.scss'
import { IOption, ISelect } from './select.interface'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	placeholder,
	error,
	isCreatable = false,
	label,
	field,
	isLoading,
}) => {
	const [value, setValue] = useState<IOption[] | null>()
	const [options, setOptions] = useState<IOption[]>()

	useEffect(() => {
		if (field.value && !value && !options) {
			const values = (field.value as ITag[]).map(item =>
				createOption(item.name)
			)
			setValue(values)
			setOptions(values)
		}
	}, [field.value, isLoading])

	const handleChange = (
		newValue: OnChangeValue<IOption, true>,
		actionMeta: ActionMeta<IOption>
	) => {
		//@ts-ignore
		setValue(newValue)
		field.onChange(
			newValue ? (newValue as IOption[]).map(item => item.label) : []
		)
	}

	const handleCreate = (inputValue: string) => {
		const newOption = createOption(inputValue)
		//@ts-ignore
		setOptions([...options, newOption])
		const newValue = value ? [newOption, ...value] : [newOption]
		setValue(newValue)
		const fieldValue = field.value ? [inputValue, ...field.value] : [inputValue]
		field.onChange(fieldValue)
	}

	return (
		<div className={s.selectContainer}>
			<label>
				<span>{label}</span>
				<CreatableSelect
					classNamePrefix="custom-select"
					isMulti={true}
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
