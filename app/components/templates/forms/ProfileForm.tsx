import { FC, memo } from 'react'

import s from '@/screens/editProfile/Edit.module.scss'
import { EditFieldProps } from '@/screens/editProfile/edit.forms.interface'

import Field from '@/ui/field/Field'

interface IProfile {
	name: string
	surname?: string
	profession: string
}

const ProfileForm: FC<EditFieldProps<IProfile>> = ({ errors, register }) => {
	return (
		<div className={s.form}>
			<h1>Profile Edit Fields</h1>
			<div className={s.fields}>
				<Field
					label="Name"
					name="profile.name"
					placeholder="Please enter your name"
					register={register}
					error={errors?.name}
					options={{
						required: 'Name is required',
						minLength: {
							value: 3,
							message: 'Min length should more 3 symbols',
						},
					}}
				/>

				<Field
					label="Profession"
					name="profile.profession"
					placeholder="Please enter your profession"
					register={register}
					error={errors?.profession}
					options={{
						required: 'Profession is required',
						minLength: {
							value: 3,
							message: 'Min length should more 3 symbols',
						},
					}}
				/>
				<Field
					label="Surname"
					name="profile.surname"
					placeholder="Please enter your surname"
					register={register}
					error={errors?.surname}
					options={{
						minLength: {
							value: 3,
							message: 'Min length should more 3 symbols',
						},
					}}
				/>
			</div>
		</div>
	)
}
export default memo(ProfileForm)
