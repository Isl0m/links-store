import { useQuery } from '@tanstack/react-query'

import { IProfile } from '@/shared/types/profile.types'

import { ProfileService } from '@/services/profile.service'

import { toastError } from '@/utils/toast-error'

export const useProfile = () => {
	const {
		data: profile,
		isSuccess,
		isLoading,
	} = useQuery(['profile', 'get'], () => ProfileService.getByUser(), {
		select: ({ data }) => data,
		onError(error) {
			toastError(error, 'Get Profile')
		},
	})

	return { profile, isSuccess, isLoading } as {
		profile: IProfile
		isSuccess: boolean
		isLoading: boolean
	}
}
