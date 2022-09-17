import type { GetServerSideProps, NextPage } from 'next'

import Profile from '@/screens/profile/Profile'

import { IProfile } from '@/shared/types/profile.types'

import { ProfileService } from '@/services/profile.service'

const ProfilePage: NextPage<{ profile: IProfile }> = ({ profile }) => {
	return <Profile profile={profile} />
}

export const getServerSideProps: GetServerSideProps = async context => {
	const { id } = context.query
	const { data: profile } = await ProfileService.getById(String(id))
	await ProfileService.incCountOpened(profile._id)
	return { props: { profile } }
}

export default ProfilePage
