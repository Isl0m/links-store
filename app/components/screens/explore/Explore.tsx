import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '@/ui/card/Card'
import InfoCard from '@/ui/card/InfoCard'

import Meta from '@/utils/meta/Meta'

import { getTagUrl } from '@/configs/url.config'

import s from './Explore.module.scss'
import { ExploreProps } from './explore.interface'

const Explore: FC<ExploreProps> = ({ profiles, tags }) => {
	return (
		<Meta
			title="Explore"
			description="Links Store is a platform where you can save information about you self"
		>
			<div className={s.explore}>
				<h1 className="mb-4">Most Popular Profiles</h1>
				<Swiper slidesPerView="auto" spaceBetween={16}>
					{profiles &&
						profiles.slice(0, 9).map(item => (
							<SwiperSlide key={item._id}>
								<Card
									_id={item._id}
									avatar={item.link?.avatar}
									background={item.link?.background}
									name={item.name}
									profession={item.profession}
									surname={item.surname}
									tags={item.tags}
								/>
							</SwiperSlide>
						))}
				</Swiper>
				<h1 className="my-4">Most Popular Tags</h1>

				<Swiper slidesPerView="auto" spaceBetween={16}>
					{tags &&
						tags.slice(0, 12).map(item => (
							<SwiperSlide key={item.name}>
								<Link href={getTagUrl(item.name)}>
									<a>
										<InfoCard
											title={item.name}
											className="max-w-xs !border-blue-300 hover:!border-blue-500"
										>
											Used in {item.profiles.length} profiles
										</InfoCard>
									</a>
								</Link>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</Meta>
	)
}

export default Explore
