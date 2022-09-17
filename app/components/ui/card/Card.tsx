import cn from 'classnames'
import parse from 'html-react-parser'
import { FC, ReactNode } from 'react'

import s from './Card.module.scss'

interface ICard {
	title: string
	description?: string
	children?: ReactNode
	className?: string
}

const Card: FC<ICard> = ({ title, description, children, className }) => {
	return (
		<div className={cn(s.card, className)}>
			<h1>{title}</h1>
			<span className={s.description}>
				{description ? parse(description) : children}
			</span>
		</div>
	)
}
export default Card
