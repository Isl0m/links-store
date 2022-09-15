import UserProfile from '@/screens/profile/UserProfile'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <UserProfile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
