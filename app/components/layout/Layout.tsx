import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'

import SearchField from '@/ui/search-field/SearchField'

import s from './Layout.module.scss'
import Navigation from './Navigation'

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<nav className={s.layout}>
			<div className={s.wrapper}>
				<a className="flex items-center">
					<Image
						src="/logo.svg"
						width={48}
						height={48}
						className="mr-3 h-6 sm:h-9"
						alt="Logo"
					/>
					<h2 className={s.title}>Links Store</h2>
				</a>
				<div className="flex md:order-2">
					<SearchField className="hidden relative md:block" />
					<button
						type="button"
						className={s.button}
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="sr-only">Open menu</span>
						<span className="material-icons-outlined w-6 h-6 ">menu</span>
					</button>
				</div>
				<div className={cn({ hidden: !isOpen }, s.menu)}>
					<SearchField className="relative mt-3 md:hidden" />
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
