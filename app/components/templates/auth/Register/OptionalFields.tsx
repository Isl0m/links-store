import { FC, useState } from 'react'

import s from '@/screens/auth/Auth.module.scss'
import { IRegisterStepsProps } from '@/screens/auth/auth.interface'

import Field from '@/ui/field/Field'

const OptionalFields: FC<IRegisterStepsProps> = ({ register, errors }) => {
	const [isSurName, setIsSurName] = useState<boolean>(false)

	return (
		<>
			<div className={s.surname} onClick={() => setIsSurName(!isSurName)}>
				{isSurName ? 'Hide' : 'Show'} optional fields
			</div>
			{isSurName && (
				<Field
					label="Surname"
					error={errors.surname}
					register={register}
					name="surname"
					options={{
						minLength: {
							value: 3,
							message: 'Min length should more 3 symbols',
						},
					}}
					placeholder="Please enter your surname"
				/>
			)}
		</>
	)
}

export default OptionalFields
