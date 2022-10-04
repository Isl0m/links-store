import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import s from '@/screens/profile/Profile.module.scss'

import Button from '@/ui/button/Button'
import ClipboardCopy from '@/ui/copy-to-clipboard/ClipboardCopy'
import LogoutButton from '@/ui/logout-button/LogoutButton'

import { ILink } from '@/shared/types/profile.types'

import { copyProfileUrl } from '@/configs/url.config'

interface IProfileBannerProps {
	_id: string
	link: ILink
	name: string
	surname?: string
	profession: string
	isUser: boolean
}

const ProfileBanner: FC<IProfileBannerProps> = ({
	_id,
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
					src={link?.background || '/uploads/bg/default.jpg'}
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
						<h2>
							{name} {surname}
						</h2>
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
					<ClipboardCopy copyText={copyProfileUrl(_id)} />
					{isUser && (
						<Link href="/profile/edit">
							<a>
								<Button icon="edit" className="mt-2">
									Edit Profile
								</Button>
							</a>
						</Link>
					)}
					<LogoutButton />
				</div>
			</div>
		</>
	)
}

export default ProfileBanner
