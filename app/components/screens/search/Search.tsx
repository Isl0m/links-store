import { FC } from 'react'

import Card from '@/ui/card/Card'
import SearchField from '@/ui/search-field/SearchField'
import SkeletonCard from '@/ui/skeleton/SkeletonCard'

import Meta from '@/utils/meta/Meta'

import s from './Search.module.scss'
import { useSearch } from './useSearch'

interface ISearchProps {}

const Search: FC<ISearchProps> = () => {
	const { handleSearch, isLoading, searchTerm, data } = useSearch()
	return (
		<Meta title="Search" description="Search profiles added to our links store">
			<div className={s.wrapper}>
				<h1>Search Profiles</h1>
				<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
				<div className={s.profiles}>
					{data ? (
						data.map(item => (
							<Card
								key={item._id}
								_id={item._id}
								avatar={item.link.avatar}
								background={item.link.background}
								name={item.name}
								profession={item.profession}
								surname={item.surname}
								tags={item.tags}
							/>
						))
					) : (
						<SkeletonCard />
					)}
				</div>
			</div>
		</Meta>
	)
}

export default Search
