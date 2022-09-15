import dynamic from 'next/dynamic'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'

import s from '@/screens/editProfile/Edit.module.scss'
import { EditFieldWithControl } from '@/screens/editProfile/edit.forms.interface'

import { ITag } from '@/shared/types/profile.types'

const DynamicSelect = dynamic(() => import('@/ui/select/SelectCreatable'), {
	ssr: false,
})

const DetailForm: FC<EditFieldWithControl<ITag>> = ({ register, control }) => {
	return (
		<div className={s.form}>
			<h4 className={s.title}>Tags Edit Fields</h4>
			<div className={s.fields}>
				<Controller
					name="tags"
					control={control}
					rules={{
						required: 'Tags is required',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							placeholder="Tags"
							defaultOptions={['IT', 'Sport']}
							isLoading={false}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default memo(DetailForm)
