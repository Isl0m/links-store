import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

import { ProfileService } from '@/services/profile.service'

import { toastError } from '@/utils/toast-error'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['profile', 'search', 'list', debouncedSearch],
		() => ProfileService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			onError(error) {
				toastError(error, 'Profile list')
			},
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
		}),
		[queryData, searchTerm]
	)
}
