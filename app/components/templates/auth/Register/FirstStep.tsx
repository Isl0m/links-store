import { FC } from 'react'

import { IRegisterStepsProps } from '@/screens/auth/auth.interface'

import Field from '@/ui/field/Field'

import { validEmail } from '@/shared/regex'

const FirstStep: FC<IRegisterStepsProps> = ({ register, errors }) => {
	return (
		<>
			<Field
				label="Email Address"
				error={errors.email}
				register={register}
				name="email"
				options={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				}}
				placeholder="Please enter your email"
				type="email"
			/>

			<Field
				label="Password"
				error={errors.password}
				register={register}
				name="password"
				options={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols',
					},
				}}
				placeholder="Please enter your password"
				type="password"
			/>
		</>
	)
}

export default FirstStep
