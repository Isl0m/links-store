import cn from 'classnames'
import { FC, useState } from 'react'

import s from './Layout.module.scss'
import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitch'

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<nav className={s.layout}>
			<div className={s.wrapper}>
				<a href="https://flowbite.com/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className={s.title}>Flowbite</span>
				</a>
				<ThemeSwitch />
				<div className="flex md:order-2">
					<div className="hidden relative md:block">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<span className="material-icons-outlined w-5 h-5 text-gray-500">
								search
							</span>
							<span className="sr-only">Search icon</span>
						</div>
						<input
							type="text"
							id="search-navbar"
							className={s.input}
							placeholder="Search..."
						/>
					</div>
					<button
						type="button"
						className={s.button}
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="sr-only">Open menu</span>
						<span className="material-icons-outlined w-6 h-6 ">menu</span>
					</button>
				</div>
				<div
					className={cn(
						{ hidden: !isOpen },
						'justify-between items-center w-full md:flex md:w-auto md:order-1'
					)}
				>
					<div className="relative mt-3 md:hidden">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<span className={cn('material-icons-outlined', s.icon)}>
								search
							</span>
						</div>
						<input type="text" className={s.input} placeholder="Search..." />
					</div>
					<Navigation
						items={[
							{ name: 'Home', link: '/' },
							{ name: 'Services', link: '/services' },
							{ name: 'Profile', link: '/profile' },
							{ name: 'Auth', link: '/auth' },
						]}
					/>
				</div>
			</div>
		</nav>
	)
}
export default Layout
