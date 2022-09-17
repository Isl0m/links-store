import { useMutation, useQuery } from '@tanstack/react-query'
import { mapKeys } from 'lodash'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useAuth } from '@/hooks/useAuth'

import { ProfileService } from '@/services/profile.service'

import { toastError } from '@/utils/toast-error'

import { EditProfile } from './edit.forms.interface'

export const useFormEdit = (setValue: UseFormSetValue<EditProfile>) => {
	const { user } = useAuth()
	const { push } = useRouter()
	const { isLoading } = useQuery(
		['profile', 'edit', 'get'],
		() => ProfileService.getByUser(),
		{
			select: ({ data }) => data,
			onSuccess: profile => {
				user && setValue('user.email', user?.email)

				setValue('profile.name', profile.name)
				setValue('profile.surname', profile.surname)
				setValue('profile.profession', profile.profession)
				profile.tags && setValue('tags', profile.tags)
				mapKeys(profile.detail, (value, key) => {
					//@ts-ignore
					setValue(`detail.${key}`, value)
				})

				mapKeys(profile.link, (value, key) => {
					//@ts-ignore
					setValue(`link.${key}`, value)
				})
			},
			onError(error) {
				toastError(error, 'Get Profile')
			},
		}
	)

	const { mutateAsync } = useMutation(
		['profile', 'update'],
		(data: EditProfile) => ProfileService.update(data),
		{
			onError(error) {
				toastError(error, 'Update profile')
			},
			onSuccess() {
				toast.success('Update profile')
				push('/profile')
			},
		}
	)
	const onSubmit: SubmitHandler<EditProfile> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
