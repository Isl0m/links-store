import 'material-icons/iconfont/material-icons.css'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/Provider'
import 'react-toastify/dist/ReactToastify.css'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
