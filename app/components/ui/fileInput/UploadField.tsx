import Image from 'next/image'
import { FC } from 'react'

import s from './UploadField.module.scss'
import { IFileInput } from './file-input.interface'
import { useUpload } from './useUpload'
import SkeletonImage from '../skeleton/SkeletonImage'

const FileInput: FC<IFileInput> = ({
	folder,
	file,
	onChange,
	placeholder,
	error,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)
	return (
		<div className={s.fileInput}>
			<div className={s.uploadFlex}>
				<div className={s.field}>
					<label>{placeholder}</label>
					<input type="file" onChange={uploadFile} />
					{error && <div className={s.error}>{error.message}</div>}
				</div>
				<div className={s.uploadImageContainer}>
					{isLoading ? (
						<SkeletonImage />
					) : (
						file && <Image src={file} alt="" layout="fill" unoptimized />
					)}
				</div>
			</div>
		</div>
	)
}

export default FileInput
