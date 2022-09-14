import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html>
			<Head />
			<body className="bg-white text-black dark:bg-gray-900 dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
export default Document
