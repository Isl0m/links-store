import Link from 'next/link'
import { FC } from 'react'

import InfoCard from '@/ui/card/InfoCard'

import { ITag } from '@/shared/types/profile.types'

import { getTagUrl } from '@/configs/url.config'

import s from './Tag.module.scss'

const Tag: FC<{ tags: ITag[] }> = ({ tags }) => {
	return (
		<div className={s.wrapper}>
			<h1>All Tags</h1>
			<article className={s.tags}>
				{tags &&
					tags.map(item => (
						<Link href={getTagUrl(item.name)} key={item.name}>
							<a>
								<InfoCard
									title={item.name}
									className="w-32 !border-blue-300 hover:!border-blue-500"
								>
									Used in {item.profiles.length} profiles
								</InfoCard>
							</a>
						</Link>
					))}
			</article>
		</div>
	)
}

export default Tag
