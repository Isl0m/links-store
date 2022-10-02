import { FC, KeyboardEventHandler, useEffect, useState } from 'react'
import { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'

import s from './Select.module.scss'
import { IOption, ISelectInput } from './select.interface'

const animatedComponents = makeAnimated()

const createOption = (label: string) => ({
	label,
	value: label.toLocaleLowerCase().replace(/\W/g, ''),
})

const SelectMultiInput: FC<ISelectInput> = ({
	label,
	placeholder,
	error,
	field,
	isLoading,
}) => {
	const [inputValue, setInputValue] = useState<string>('')
	const [value, setValue] = useState<IOption[] | null>()
	useEffect(() => {
		if (field.value && !value) {
			const values = (field.value as string[]).map(item => createOption(item))

			setValue(values)
		}
	}, [isLoading, field.value])

	const handleInputChange = (inputValue: string) => {
		setInputValue(inputValue)
	}
	const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
		if (!inputValue) return
		switch (event.key) {
			case 'Enter':
			case 'Tab':
			case 'Space':
				const newValue = value
					? [createOption(inputValue), ...value]
					: [createOption(inputValue)]
				const fieldValue = field.value
					? [inputValue, ...field.value]
					: [inputValue]
				field.onChange(fieldValue)
				//@ts-ignore
				setValue(newValue)
				setInputValue('')
				event.preventDefault()
		}
	}
	const handleChange = (newValue: OnChangeValue<IOption, true>) => {
		//@ts-ignore
		setValue(newValue)
		field.onChange(
			newValue ? (newValue as IOption[]).map(item => item.label) : []
		)
	}

	return (
		<div className={s.selectContainer}>
			<label>
				<span>{label}</span>
				<CreatableSelect
					placeholder={placeholder}
					inputValue={inputValue}
					value={value}
					classNamePrefix="custom-select"
					components={{ DropdownIndicator: null, ...animatedComponents }}
					//@ts-ignore
					onChange={handleChange}
					onInputChange={handleInputChange}
					onKeyDown={handleKeyDown}
					isMulti
					isClearable
					menuIsOpen={false}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={s.error}>{error.message}</div>}
		</div>
	)
}

export default SelectMultiInput
