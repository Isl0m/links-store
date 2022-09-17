import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

import s from '@/screens/profile/Profile.module.scss'

import { ILink } from '@/shared/types/profile.types'

const ProfileLinks: FC<{ link: ILink }> = ({ link }) => {
	return (
		<>
			{link?.social.length && (
				<div className={s.social}>
					<h2>Social Links</h2>
					<div className={s.links}>
						{link?.social.map(item => (
							<SocialIcon url={item} fgColor="white" key={item} />
						))}
					</div>
				</div>
			)}
			{link?.portfolio?.length && (
				<div className={s.portfolio}>
					<h2>Portfolio Links</h2>
					<div className={s.links}>
						{link?.portfolio.map(item => (
							<SocialIcon url={item} fgColor="white" key={item} />
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default ProfileLinks
