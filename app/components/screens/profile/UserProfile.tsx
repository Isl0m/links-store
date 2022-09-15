import { FC } from 'react'

import Profile from './Profile'
import { useProfile } from './useProfile'

const UserProfile: FC = () => {
	const { profile } = useProfile()

	return <Profile profile={profile} isUser />
}
export default UserProfile
