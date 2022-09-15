import dynamic from 'next/dynamic'
import { FC } from 'react'

import SkeletonProfile from '@/ui/skeleton/SkeletonProfile'

import { IProfile } from '@/shared/types/profile.types'

import Meta from '@/utils/meta/Meta'

import s from './Profile.module.scss'
import ProfileBanner from './ProfileBanner'
import ProfileDetail from './ProfileDetail'
import ProfileLinks from './ProfileLinks'

const AdditionInfo = dynamic(() => import('@/ui/card/AdditionInfo'), {
	ssr: false,
})

interface ProfileProps {
	profile: IProfile
	isUser: boolean
}

const Profile: FC<ProfileProps> = ({ profile, isUser = false }) => {
	if (!profile) {
		return <SkeletonProfile />
	}
	const { name, surname, profession, link, detail, tags } = profile
	return (
		<Meta title="Profile">
			<div className={s.profileContainer}>
				<ProfileBanner
					link={link}
					name={name}
					surname={surname}
					profession={profession}
					isUser={isUser}
				/>

				<ProfileDetail detail={detail} />

				<div className={s.mainInfo}>
					{tags && detail && <AdditionInfo tags={tags} detail={detail} />}

					<ProfileLinks link={link} />
				</div>
			</div>
		</Meta>
	)
}
export default Profile
