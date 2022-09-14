import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from '@/screens/auth/Auth.module.scss'
import { ILoginInput } from '@/screens/auth/auth.interface'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { useActions } from '@/hooks/useActions'

import { validEmail } from '@/shared/regex'

interface ILoginProps {
	toggleAuthType: () => void
}

const Login: FC<ILoginProps> = ({ toggleAuthType }) => {
	const { login } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ILoginInput>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<ILoginInput> = data => {
		login(data)
		reset()
	}
	return (
		<div className={s.wrapper}>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<h5 className={s.title}>Log in to your account</h5>

				<Field
					label="Email Address"
					name="email"
					error={errors.email}
					register={register}
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
					name="password"
					error={errors.password}
					register={register}
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

				<Button type="submit" className="w-full">
					Login
				</Button>
				<div className={s.toReg} onClick={toggleAuthType}>
					Don&apos;t have an account? <a>Sign Up</a>
				</div>
			</form>
		</div>
	)
}

export default Login
