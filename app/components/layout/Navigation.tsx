import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './Layout.module.scss'

interface NavigationProps {
	onClick?: () => void
	items: {
		name: string
		link: string
	}[]
}

const Navigation: FC<NavigationProps> = ({ onClick, items }) => {
	const { asPath } = useRouter()

	return (
		<ul className={s.links} onClick={onClick}>
			{items &&
				items.map(item => (
					<li key={item.link}>
						<Link href={item.link}>
							<a
								className={cn(s.item, {
									[s.active]: item.link === `/${asPath.split('/')[1]}`,
								})}
							>
								{item.name}
							</a>
						</Link>
					</li>
				))}
		</ul>
	)
}
export default Navigation
