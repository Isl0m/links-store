import { FC } from 'react'
import Link from 'next/link'
import s from './Layout.module.scss'

interface NavigationProps{
  items:{
    name:string
    link:string
  }[]
}

const Navigation: FC<NavigationProps> = ({items}) => {
  return (
		<ul className={s.links}>
      {
      items && items.map(item=>(
      <li key={item.link}>
          <Link href={item.link}>
				<a
					className={s.item}
				>
        {item.name}	
				</a>
        </Link>
			</li>
      ))
    }
		</ul>
	)
}
export default Navigation
