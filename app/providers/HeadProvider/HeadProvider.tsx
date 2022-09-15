import Head from 'next/head'
import NextProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

import Favicons from './Favicons'

const HeadProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<NextProgress
				color="#1A56DB"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5.0"
				/>

				<Favicons />

				<meta name="theme-color" content="#1A56DB" />
				<meta name="msapplication-navbutton-color" content="#1A56DB" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#1A56DB" />
				{/* <link rel="manifest" href="/manifest.json" /> */}
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
