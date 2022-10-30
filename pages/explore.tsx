import type { GetServerSideProps, NextPage } from 'next'


import { ProfileService } from '@/services/profile.service'
import { TagService } from '@/services/tag.service'
import Explore from '@/screens/explore/Explore'
import { ExploreProps } from '@/screens/explore/explore.interface'

const ExplorePage: NextPage<ExploreProps> = ({ profiles, tags }) => {
	return <Explore profiles={profiles} tags={tags} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: profiles } = await ProfileService.getMostPopular()
	const { data: tags } = await TagService.getAll()
	return { props: { profiles, tags } }
}

export default ExplorePage
