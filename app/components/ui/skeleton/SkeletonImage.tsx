import { FC } from 'react'

const SkeletonImage: FC = () => {
	return (
		<div className="animate-pulse h-full w-full rounded-md bg-gray-300 dark:bg-gray-700"></div>
	)
}

export default SkeletonImage
