import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './Layout.module.scss'

interface NavigationProps {
	items: {
		name: string
		link: string
	}[]
}

const Navigation: FC<NavigationProps> = ({ items }) => {
	const { asPath } = useRouter()

	return (
		<ul className={s.links}>
			{items &&
				items.map(item => (
					<li key={item.link}>
						<Link href={item.link}>
							<a className={cn(s.item, { [s.active]: item.link === asPath })}>
								{item.name}
							</a>
						</Link>
					</li>
				))}
		</ul>
	)
}
export default Navigation
