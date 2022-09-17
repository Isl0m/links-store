import { DevTool } from '@hookform/devtools'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'
import SkeletonEdit from '@/ui/skeleton/SkeletonEdit'

import s from './Edit.module.scss'
import { EditProfile } from './edit.forms.interface'
import { useFormEdit } from './useFormEdit'
import DetailForm from '@/templates/forms/DetailForm'
import LinkForm from '@/templates/forms/LinkForm'
import ProfileForm from '@/templates/forms/ProfileForm'
import TagForm from '@/templates/forms/TagForm'
import UserForm from '@/templates/forms/UserForm'

const Edit: FC = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<EditProfile>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useFormEdit(setValue)

	if (isLoading) return <SkeletonEdit />

	return (
		<>
			<div className={s.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<UserForm errors={errors.user} register={register} />
					<ProfileForm errors={errors.profile} register={register} />
					<LinkForm
						control={control}
						errors={errors.link}
						register={register}
					/>
					<DetailForm
						control={control}
						errors={errors.detail}
						register={register}
					/>
					<TagForm control={control} register={register} />
					<Button type="submit">Update</Button>
				</form>
			</div>
			{/* <DevTool control={control} /> */}
		</>
	)
}

export default Edit
