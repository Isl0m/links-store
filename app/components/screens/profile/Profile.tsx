import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

import Button from '@/ui/button/Button'
import Card from '@/ui/card/Card'
import SkeletonProfile from '@/ui/skeleton/SkeletonProfile'

import { useProfile } from './useProfile'

const AdditionInfo = dynamic(() => import('@/ui/card/AdditionInfo'), {
	ssr: false,
})

const Profile: FC = () => {
	const { isLoading, profile } = useProfile()
	if (isLoading && !profile) {
		return <SkeletonProfile />
	}

	const { name, surname, profession, link, detail, tags } = profile

	return (
		<div className="container my-8">
			<div className="w-2/3 h-full mx-auto">
				<div className="relative overflow-hidden  w-full h-44 rounded-t-lg">
					<Image
						src={link?.background || '/uploads/bg/default.png'}
						className="image-like-bg object-top"
						layout="fill"
						draggable={false}
						alt="Profile Background"
					/>
				</div>
				<div className="flex justify-between mt-2 mx-12">
					<div className="flex item-center">
						<div className="relative overflow-hidden -mt-16 w-32 h-32 rounded-full border-4 border-white">
							<Image
								src={link?.avatar || '/avatar.png'}
								className="image-like-bg"
								layout="fill"
								draggable={false}
								alt="Profile Avatar"
							/>
						</div>
						<div className="ml-2">
							<div className="font-bold text-xl">
								{name} {surname}
							</div>
							<div className="text-gray-400">{profession}</div>
						</div>
					</div>
					<Link href="/profile/edit">
						<Button icon="edit" className="mt-2">
							<a>Edit Profile</a>
						</Button>
					</Link>
				</div>

				{detail ? (
					<Card
						title="Biography"
						description={detail.biography}
						className="w-full my-4"
					/>
				) : (
					<div className="flex items-center justify-center h-40 my-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
						<Link href="/profile/edit">
							<a>
								<Button>Add Information</Button>
							</a>
						</Link>
					</div>
				)}
				<div className="flex item-center gap-8 min-w-1/2">
					{tags && detail && <AdditionInfo tags={tags} detail={detail} />}

					{link?.social.length && (
						<div>
							<span className="block text-zinc-900 dark:text-white text-center mb-2">
								Social Links
							</span>
							<div className="flex justify-center gap-2">
								{link?.social.map(item => (
									<SocialIcon url={item} fgColor="white" key={item} />
								))}
							</div>
						</div>
					)}
					{link?.portfolio?.length && (
						<div>
							<span className="block text-zinc-900 dark:text-white text-center mb-2">
								Portfolio Links
							</span>
							<div className="flex justify-center gap-2">
								{link?.portfolio.map(item => (
									<SocialIcon url={item} fgColor="white" key={item} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default Profile
