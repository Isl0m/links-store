import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

import { ILink } from '@/shared/types/profile.types'

import s from './Profile.module.scss'

const ProfileLinks: FC<{ link: ILink }> = ({ link }) => {
	return (
		<>
			{link?.social.length && (
				<div className={s.social}>
					<span className={s.title}>Social Links</span>
					<div className={s.links}>
						{link?.social.map(item => (
							<SocialIcon url={item} fgColor="white" key={item} />
						))}
					</div>
				</div>
			)}
			{link?.portfolio?.length && (
				<div className={s.portfolio}>
					<span className={s.title}>Portfolio Links</span>
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
