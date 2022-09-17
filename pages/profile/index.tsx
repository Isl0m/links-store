import Profile from '@/screens/profile/Profile'
import { useProfile } from '@/screens/profile/useProfile'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	const { profile } = useProfile()
	return <Profile profile={profile} isUser />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
