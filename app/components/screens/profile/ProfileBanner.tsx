import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'

import { ILink } from '@/shared/types/profile.types'

import s from './Profile.module.scss'

interface IProfileBannerProps {
	link: ILink
	name: string
	surname?: string
	profession: string
	isUser: boolean
}

const ProfileBanner: FC<IProfileBannerProps> = ({
	link,
	name,
	surname,
	profession,
	isUser,
}) => {
	return (
		<>
			<div className={s.banner}>
				<Image
					src={link?.background || '/uploads/bg/default.png'}
					className="image-like-bg object-top"
					layout="fill"
					draggable={false}
					alt="Profile Background"
				/>
			</div>
			<div className={s.controls}>
				<div className={s.avatarAndInfo}>
					<div className={s.avatar}>
						<Image
							src={link?.avatar || '/avatar.png'}
							className="image-like-bg"
							layout="fill"
							draggable={false}
							alt="Profile Avatar"
						/>
					</div>
					<div className={s.info}>
						<div className={s.title}>
							{name} {surname}
						</div>
						<div className={s.subtitle}>{profession}</div>
					</div>
				</div>
				<div>
					{link?.CV && (
						<a href={link.CV} download="CV">
							<Button icon="file_download" className="mt-2">
								Download CV
							</Button>
						</a>
					)}
					{isUser && (
						<Link href="/profile/edit">
							<Button icon="edit" className="mt-2 ml-2">
								<a>Edit Profile</a>
							</Button>
						</Link>
					)}
				</div>
			</div>
		</>
	)
}

export default ProfileBanner
