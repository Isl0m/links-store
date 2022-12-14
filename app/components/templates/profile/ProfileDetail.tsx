import Link from 'next/link'
import { FC } from 'react'

import s from '@/screens/profile/Profile.module.scss'

import Button from '@/ui/button/Button'
import InfoCard from '@/ui/card/InfoCard'

import { IDetail } from '@/shared/types/profile.types'

const ProfileDetail: FC<{ detail: IDetail }> = ({ detail }) => {
	return (
		<>
			{detail ? (
				<InfoCard
					title="Biography"
					description={detail.biography}
					className="w-full my-4"
				/>
			) : (
				<div className={s.noDetails}>
					<Link href="/profile/edit">
						<a>
							<Button>Add Information</Button>
						</a>
					</Link>
				</div>
			)}
		</>
	)
}

export default ProfileDetail
