import { FC } from 'react'

import { IDetail, ITag } from '@/shared/types/profile.types'

import Tag from '../tag/Tag'

import InfoCard from './InfoCard'

interface AdditionInfoProps {
	detail: IDetail
	tags: ITag[]
}

const AdditionInfo: FC<AdditionInfoProps> = ({ tags, detail }) => {
	const { age, gender, country, city, birthDay } = detail
	return (
		<InfoCard title="Additional Info">
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
					<Tag tags={tags} />
				</div>
			)}
		</InfoCard>
	)
}

export default AdditionInfo
