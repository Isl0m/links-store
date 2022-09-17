import { IS_CLIENT } from '@/configs/constants'

export async function copyTextToClipboard(text: string) {
	if (IS_CLIENT) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		} else {
			return document.execCommand('copy', true, text)
		}
	}
}
