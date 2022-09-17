import dynamic from 'next/dynamic'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'

import s from '@/screens/edit-profile/Edit.module.scss'
import { EditFieldWithControl } from '@/screens/edit-profile/edit.forms.interface'

import { ITag } from '@/shared/types/profile.types'

import { useTagForm } from './useTagForm'

const DynamicSelect = dynamic(() => import('@/ui/select/SelectCreatable'), {
	ssr: false,
})

const TagForm: FC<EditFieldWithControl<ITag>> = ({ control }) => {
	const { tags } = useTagForm()
	return (
		<div className={s.form}>
			<h1>Tags Edit Fields</h1>
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
							defaultOptions={tags}
							isLoading={false}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default memo(TagForm)
