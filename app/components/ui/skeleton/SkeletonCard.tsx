import { FC } from 'react'

const SkeletonCard: FC = () => {
	return (
		<div className="animate-pulse flex flex-wrap gap-4 mt-4">
			<div className="h-64 w-64 rounded-md bg-gray-300 dark:bg-gray-700"></div>
			<div className="h-64 w-64 rounded-md bg-gray-300 dark:bg-gray-700"></div>
			<div className="h-64 w-64 rounded-md bg-gray-300 dark:bg-gray-700"></div>
		</div>
	)
}

export default SkeletonCard
