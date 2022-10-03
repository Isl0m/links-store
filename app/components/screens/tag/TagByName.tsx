import { FC } from 'react'

import Card from '@/ui/card/Card'

import { ITagPopulated } from '@/shared/types/profile.types'

import s from './Tag.module.scss'

const TagByName: FC<{ tag: ITagPopulated }> = ({ tag }) => {
	return (
		<div className={s.wrapper}>
			<h1>Tag Name: {tag.name}</h1>
			<h3>Used in {tag.profiles.length} profiles</h3>
			<article className={s.profiles}>
				{tag?.profiles &&
					tag.profiles.map(item => (
						<Card
							key={item._id}
							_id={item._id}
							avatar={item.link?.avatar}
							background={item.link?.background}
							name={item.name}
							profession={item.profession}
							surname={item.surname}
							tags={false}
						/>
					))}
			</article>
		</div>
	)
}

export default TagByName
