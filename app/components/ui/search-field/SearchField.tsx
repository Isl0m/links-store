import cn from 'classnames'
import { FC } from 'react'

import s from './SearchField.module.scss'

const SearchField: FC<{ className: string }> = ({ className }) => {
	return (
		<div className={cn(s.search, className)}>
			<div className={s.icon}>
				<span className="material-icons-outlined">search</span>
				<span className="sr-only">Search icon</span>
			</div>
			<input type="text" className={s.field} placeholder="Search..." />
		</div>
	)
}

export default SearchField
