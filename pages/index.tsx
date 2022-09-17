import type { GetServerSideProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { HomeProps } from '@/screens/home/home.interface'

import { ProfileService } from '@/services/profile.service'
import { TagService } from '@/services/tag.service'

const HomePage: NextPage<HomeProps> = ({ profiles, tags }) => {
	return <Home profiles={profiles} tags={tags} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: profiles } = await ProfileService.getMostPopular()
	const { data: tags } = await TagService.getAll()
	return { props: { profiles, tags } }
}

export default HomePage
