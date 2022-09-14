import { FC } from 'react'

import { IRegisterStepsProps } from '@/screens/auth/auth.interface'

import Field from '@/ui/field/Field'

import OptionalFields from './OptionalFields'

const SecondStep: FC<IRegisterStepsProps> = ({ register, errors }) => {
	return (
		<>
			<Field
				label="Name"
				error={errors.name}
				register={register}
				name="name"
				options={{
					required: 'Name is required',
					minLength: {
						value: 3,
						message: 'Min length should more 3 symbols',
					},
				}}
				placeholder="Please enter your name"
			/>
			<Field
				label="Profession"
				error={errors.profession}
				register={register}
				name="profession"
				options={{
					required: 'Profession is required',
					minLength: {
						value: 3,
						message: 'Min length should more 3 symbols',
					},
				}}
				placeholder="Please enter your profession"
			/>
			<OptionalFields register={register} errors={errors} />
		</>
	)
}

export default SecondStep
