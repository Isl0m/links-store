import { FC } from 'react'
import { toast } from 'react-toastify'

import { copyTextToClipboard } from '@/utils/copy-to-clipboard'

import Button from '../button/Button'

const ClipboardCopy: FC<{ copyText: string }> = ({ copyText }) => {
	const handleCopyClick = () => {
		copyTextToClipboard(copyText)
			.then(() => {
				toast.success('Copied!')
			})
			.catch(err => {
				console.log(err)
			})
	}
	return (
		<Button icon="share" className="mx-2" onClick={handleCopyClick}>
			Copy Link
		</Button>
	)
}

export default ClipboardCopy
