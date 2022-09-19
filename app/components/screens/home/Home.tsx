import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

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
				<h1 className="mb-4">Most Popular Profiles</h1>
				<Swiper slidesPerView="auto" spaceBetween={16}>
					{profiles &&
						profiles.map(item => (
							<SwiperSlide key={item._id}>
								<Card
									_id={item._id}
									avatar={item.link.avatar}
									background={item.link.background}
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
						tags.map(item => (
							<SwiperSlide key={item.name}>
								<Link href={getTagUrl(item.name)}>
									<a>
										<InfoCard title={item.name} className="w-32">
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

export default Home
