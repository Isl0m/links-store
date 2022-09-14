import { EditorProps } from 'draft-js'

import { IFieldProps } from '@/shared/types/form.types'

type TypeEditorPropsField = EditorProps & Partial<IFieldProps>

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
