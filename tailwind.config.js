/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
darkMode: "class",
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addComponents, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: colors.blue[500],
					color: '#fff',
					height: 'fit-content',
					width: 'fit-content',
					padding: '0.25rem 0.5rem',
					borderRadius: '0.3rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: colors.blue[600],
					},
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
