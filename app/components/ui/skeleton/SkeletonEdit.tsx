import { FC } from 'react'

import s from './SkeletonEdit.module.scss'

const SkeletonEdit: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.form}>
				<div className={s.title}></div>
				<div className={s.fields}>
					<div className={s.field}>
						<div className={s.label}></div>
						<div className={s.input}></div>
					</div>
					<div className={s.field}>
						<div className={s.label}></div>
						<div className={s.input}></div>
					</div>
					<div className={s.field}>
						<div className={s.label}></div>
						<div className={s.input}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkeletonEdit
