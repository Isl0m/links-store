import Link from 'next/link'
import { FC } from 'react'

import Card from '@/ui/card/Card'
import InfoCard from '@/ui/card/InfoCard'

import Meta from '@/utils/meta/Meta'

import { getTagUrl } from '@/configs/url.config'

import s from './Home.module.scss'
import { HomeProps } from './home.interface'

const Home: FC<HomeProps> = ({ profiles, tags }) => {
	return (
		<Meta
			title="Home"
			description="Links Store is a platform where you can save information about you self"
		>
			<div className={s.home}>
				<h1>Most Popular Profiles</h1>
				<div className={s.popularProfiles}>
					{profiles &&
						profiles.map(item => (
							<Card
								_id={item._id}
								avatar={item.link.avatar}
								background={item.link.background}
								name={item.name}
								profession={item.profession}
								surname={item.surname}
								tags={item.tags}
								key={item._id}
							/>
						))}
				</div>
				<h1 className="mt-4">Most Popular Tags</h1>
				<div className={s.popularTags}>
					{tags &&
						tags.slice(0, 5).map(item => (
							<Link href={getTagUrl(item.name)} key={item.name}>
								<a>
									<InfoCard title={item.name} className="w-32">
										Used in {item.profiles.length} profiles
									</InfoCard>
								</a>
							</Link>
						))}
				</div>
			</div>
		</Meta>
	)
}

export default Home
