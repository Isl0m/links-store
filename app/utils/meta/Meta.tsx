import { siteName, titleMerge } from 'configs/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { onlyText } from '../clearText'

import { MetaNoIndex } from './MetaNoIndex'
import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta name="title" content={siteName} />
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>

					{/*<!-- Open Graph / Facebook -->*/}
					<meta property="og:type" content="website" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:site_name" content={siteName} />
					<meta property="og:url" content={currentUrl} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
					<meta property="og:locale" content="en" />
					<meta
						property="og:image"
						content={
							`${process.env.APP_URL}${image}` ||
							'/favicons/apple-touch-icon-72x72.png'
						}
					/>

					{/* <!-- Twitter --> */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content={currentUrl} />
					<meta property="twitter:title" content={siteName} />
					<meta
						property="twitter:description"
						content={onlyText(description, 197)}
					/>
					<meta
						property="twitter:image"
						content={
							`${process.env.APP_URL}${image}` ||
							'/favicons/apple-touch-icon-72x72.png'
						}
					/>

					<link rel="canonical" href={currentUrl} />
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}

			{children}
		</>
	)
}

export default Meta
