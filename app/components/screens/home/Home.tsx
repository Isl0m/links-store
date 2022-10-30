import Image from 'next/image'
import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import s from './Home.module.scss'
import { features } from 'process'
import Feature from '@/ui/feature/Feature'
import Button from '@/ui/button/Button'
import Link from 'next/link'

const featuresList = [
  {
      icon:'link',
      text:'Save portfolio and social links'
    },
     {
      icon:'feed',
      text:'Add your biography'
    },
    {
      icon:'ios_share',
      text:'Share in one click'
    },
    {
      icon:'picture_as_pdf',
      text:'Add your Resume or CV'
    },
]

const Home: FC = () => {
	return (
		<Meta
			title="Home"
			description="Links Store is a platform where you can save information about you self"
		>
			<div className={s.home}>
				<article className={s.hero}>
					<Image width={400} height={400} alt="logo" src="/logo.svg" />
					<div className={s.info}>
						<h1>Links Store</h1>
						<p>
							Is a platform where you can save your useful links or information
							about yourself than share.
						</p>
            <Link href='/explore'>
            <a>
            <Button className="mt-4" >Get Started</Button>
            </a>
            </Link>
					</div>
				</article>
        <hr />
        <article className={s.features}>
          <h1>Features</h1>
          <ul>
          {featuresList.map(item => (<Feature {...item} key={item.icon} />))}
          </ul>
        </article>
			</div>
		</Meta>
	)
}

export default Home
