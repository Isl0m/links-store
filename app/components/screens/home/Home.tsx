import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

const Home: FC = () => {
	return (
		<Meta
			title="Home"
			description="Links Store is a platform where you can save information about you self"
		>
			<div className="text-2xl text-gray-900 dark:text-gray-200">Home</div>
		</Meta>
	)
}

export default Home
