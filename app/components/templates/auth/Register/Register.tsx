import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from '@/screens/auth/Auth.module.scss'
import { IRegisterInput } from '@/screens/auth/auth.interface'

import Button from '@/ui/button/Button'

import { useActions } from '@/hooks/useActions'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

interface IRegisterProps {
	toggleAuthType: () => void
}

const Register: FC<IRegisterProps> = ({ toggleAuthType }) => {
	const { register: registerUser } = useActions()
	const [isFirstStep, setIsFirstStep] = useState<boolean>(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IRegisterInput>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IRegisterInput> = data => {
		registerUser(data)
		reset()
	}
	return (
		<div className={s.wrapper}>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<h1>Create your account</h1>

				{isFirstStep ? (
					<FirstStep register={register} errors={errors} />
				) : (
					<SecondStep register={register} errors={errors} />
				)}

				<Button
					type={isFirstStep ? 'button' : 'submit'}
					className="w-full"
					onClick={() => setIsFirstStep(false)}
				>
					{isFirstStep ? 'Next step' : 'Sign up'}
				</Button>
				<div className={s.toReg} onClick={toggleAuthType}>
					Have an account? <a>Log in now</a>
				</div>
			</form>
		</div>
	)
}

export default Register
