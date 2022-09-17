import ProfileEdit from '@/screens/edit-profile/Edit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfileEditPage: NextPageAuth = () => {
	return <ProfileEdit />
}

ProfileEditPage.isOnlyUser = true

export default ProfileEditPage
