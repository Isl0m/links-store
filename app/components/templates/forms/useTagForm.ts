import { useQuery } from '@tanstack/react-query'

import { TagService } from '@/services/tag.service'

import { toastError } from '@/utils/toast-error'

export const useTagForm = () => {
	const { data: tags, isLoading } = useQuery(
		['tag', 'form', 'get'],
		() => TagService.getAll(),
		{
			select: ({ data }) => {
				return data.map(item => item.name)
			},
			onError(error) {
				toastError(error, 'Get Profile')
			},
		}
	)

	return { tags, isLoading }
}
