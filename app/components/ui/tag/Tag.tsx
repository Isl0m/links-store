import { FC } from 'react'

import { ITag } from '@/shared/types/profile.types'

const Tag: FC<{ tags: ITag[] }> = ({ tags }) => {
	return (
		<div className="flex justify-center flex-wrap gap-1 mt-1">
			{tags.map(item => (
				<span
					className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
					key={item?.name}
				>
					# {item?.name}
				</span>
			))}
		</div>
	)
}

export default Tag
