import cn from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import s from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: string
	className?: string
	children: ReactNode
}

const Button: FC<IButton> = ({ children, icon, className, ...rest }) => {
	return (
		<button type="button" className={cn(s.button, className)} {...rest}>
			{icon && (
				<span className="material-icons-outlined mr-2 -ml-1 w-4">{icon}</span>
			)}
			{children}
		</button>
	)
}

export default Button
