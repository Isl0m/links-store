import { useQuery } from '@tanstack/react-query'

import { IProfile } from '@/shared/types/profile.types'

import { ProfileService } from '@/services/profile.service'

import { toastError } from '@/utils/toast-error'

export const useProfile = () => {
	const { data: profile, isLoading } = useQuery(
		['profile', 'get'],
		() => ProfileService.getByUser(),
		{
			select: ({ data }) => data,
			onError(error) {
				toastError(error, 'Get Profile')
			},
		}
	)

	return { profile, isLoading } as {
		profile: IProfile
		isLoading: boolean
	}
}
