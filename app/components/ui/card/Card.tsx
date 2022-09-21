import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Tag from '@/ui/tag/Tag'

import { ITag } from '@/shared/types/profile.types'

import { getProfileUrl } from '@/configs/url.config'

import s from './Card.module.scss'

interface CardProps {
	_id: string
	avatar?: string
	background: string
	name: string
	surname?: string
	profession: string
	tags: ITag[] | false
}

const Card: FC<CardProps> = ({
	_id,
	avatar,
	background,
	name,
	surname,
	profession,
	tags,
}) => {
	return (
		<Link href={getProfileUrl(_id)}>
			<a>
				<div className={s.card}>
					<div className={s.image}>
						<Image
							src={background || '/uploads/bg/default.png'}
							className="image-like-bg object-top"
							layout="fill"
							draggable={false}
							alt="Card Background"
						/>
					</div>
					{avatar && (
						<div className={s.avatar}>
							<Image
								src={avatar || '/avatar.png'}
								className="image-like-bg"
								layout="fill"
								draggable={false}
								alt="Card Avatar"
							/>
						</div>
					)}
					<div className={s.info}>
						<h2 className="tracking-tight">
							{name} {surname}
						</h2>
						<p className={s.profession}>{profession}</p>
						{tags && <Tag tags={tags.slice(0, 3)} />}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default Card
