import { FC, memo } from 'react'

import s from '@/screens/editProfile/Edit.module.scss'
import { EditFieldProps } from '@/screens/editProfile/edit.forms.interface'

import Field from '@/ui/field/Field'

import { validEmail } from '@/shared/regex'

import { IEmailPassword } from '@/store/user/user.interface'

const UserForm: FC<EditFieldProps<IEmailPassword>> = ({ errors, register }) => {
	return (
		<div className={s.form}>
			<h4 className={s.title}>User Edit Fields</h4>
			<div className={s.fields}>
				<Field
					register={register}
					label="Email Address"
					name="user.email"
					type="email"
					placeholder="Please enter your email"
					error={errors?.email}
					options={{
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email address',
						},
					}}
				/>

				<Field
					register={register}
					label="Password"
					name="user.password"
					type="password"
					placeholder="Please enter your password"
					error={errors?.password}
					options={{
						minLength: {
							value: 6,
							message: 'Min length should more 6 symbols',
						},
					}}
				/>
			</div>
		</div>
	)
}

export default memo(UserForm)
