import { FC } from 'react'

import { IDetail, ITag } from '@/shared/types/profile.types'

import Card from './Card'

interface AdditionInfoProps {
	detail: IDetail
	tags: ITag[]
}

const AdditionInfo: FC<AdditionInfoProps> = ({ tags, detail }) => {
	const { age, gender, country, city, birthDay } = detail
	return (
		<Card title="Additional Info">
			Age: {age} <br />
			Gender: {gender}
			<br />
			Country: {country}
			<br />
			{city && <div>City: {city}</div>}
			{birthDay && (
				<div>
					Birth Day: {new Intl.DateTimeFormat().format(new Date(birthDay))}
				</div>
			)}
			{tags && (
				<div>
					Tags:
					<div className="flex justify-center gap-1 mt-1">
						{tags.map(item => (
							<span
								className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
								key={item?.name}
							>
								# {item?.name}
							</span>
						))}
					</div>
				</div>
			)}
		</Card>
	)
}

export default AdditionInfo
