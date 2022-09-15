import Link from 'next/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'
import Card from '@/ui/card/Card'

import { IDetail } from '@/shared/types/profile.types'

import s from './Profile.module.scss'

const ProfileDetail: FC<{ detail: IDetail }> = ({ detail }) => {
	return (
		<>
			{detail ? (
				<Card
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
