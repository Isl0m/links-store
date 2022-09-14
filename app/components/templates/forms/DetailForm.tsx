import dynamic from 'next/dynamic'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import s from '@/screens/editProfile/Edit.module.scss'
import { EditFieldWithControl } from '@/screens/editProfile/edit.forms.interface'

import Field from '@/ui/field/Field'

import { IDetail } from '@/shared/types/profile.types'

import { countries } from '@/configs/constants'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const DynamicTextEditor = dynamic(() => import('@/ui/text-editor/TextEditor'), {
	ssr: false,
})

const DetailForm: FC<EditFieldWithControl<IDetail>> = ({
	errors,
	register,
	control,
}) => {
	const options = ['Male', 'Female']

	return (
		<div className={s.form}>
			<h4 className={s.title}>Detail Edit Fields</h4>
			<div className={s.fields}>
				<Field
					label="Age"
					name="detail.age"
					placeholder="Please enter your age"
					type="number"
					register={register}
					error={errors?.age}
					options={{
						required: 'Age is required',
						valueAsNumber: true,
					}}
				/>

				<Controller
					name="detail.gender"
					control={control}
					rules={{
						required: 'Gender is required',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							label="Gender"
							placeholder="Please choose gender"
							defaultOptions={options}
							isLoading={Boolean(!field.value)}
						/>
					)}
				/>

				<Controller
					name="detail.country"
					control={control}
					rules={{
						required: 'Country is required',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							label="Country"
							placeholder="Please choose country"
							defaultOptions={countries}
							isLoading={Boolean(!field.value)}
						/>
					)}
				/>

				<Controller
					name="detail.biography"
					control={control}
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<DynamicTextEditor
							placeholder="Biography"
							onChange={onChange}
							error={error}
							value={value}
						/>
					)}
					rules={{
						validate: {
							required: v =>
								(v && stripHtml(v).result.length > 0) ||
								'Description is required!',
						},
					}}
				/>

				<Field
					label="City"
					name="detail.city"
					placeholder="Please enter your city"
					register={register}
					error={errors?.city}
				/>

				<Field
					label="Birth Day"
					name="detail.birthDay"
					placeholder="Please enter your birth day"
					type="date"
					register={register}
					error={errors?.birthDay}
				/>
			</div>
		</div>
	)
}

export default memo(DetailForm)
