import cn from 'classnames'
import { ChangeEvent, FC, memo } from 'react'

import s from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	classNames?: string
}

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	classNames,
}) => {
	return (
		<div className={cn(s.search, classNames)}>
			<div className={s.icon}>
				<span className="material-icons-outlined">search</span>
				<span className="sr-only">Search icon</span>
			</div>
			<input
				type="text"
				className={s.field}
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Search..."
			/>
		</div>
	)
}

export default memo(SearchField)
