import { FC } from 'react'

import s from './SkeletonProfile.module.scss'

const SkeletonProfile: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.imgBanner}>
				<span className="material-icons-outlined w-24 h-24 !text-8xl text-gray-500 dark:text-gray-200">
					landscape
				</span>
			</div>
			<div className={s.details}>
				<div className={s.left}>
					<div className={s.avatar}>
						<span className="material-icons-outlined w-18 h-18 !text-6xl text-gray-500 dark:text-gray-200">
							person
						</span>
					</div>
					<div className={s.textBlock}>
						<div className={s.title}></div>
						<div className={s.description}></div>
					</div>
				</div>
				<div className={s.button}></div>
			</div>
			<div className={s.info}></div>
		</div>
	)
}

export default SkeletonProfile
