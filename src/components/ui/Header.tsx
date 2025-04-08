import { PUBLIC_PAGES } from '@/config/pages/public.config'
import Link from 'next/link'
import styles from '../HomeMainScreen.module.scss'

interface Props {}

export function Header() {
	return (
		<header
			className={`py-4 flex justify-center md:justify-end ${styles['header']}`}
		>
			<nav className="mx-12">
				<ul className="flex gap-14">
					<li>
						<Link className="hover:underline" href={PUBLIC_PAGES.CONTACT}>
							Contact
						</Link>
					</li>
					<li>
						<Link className="hover:underline" href={PUBLIC_PAGES.PORTFOLIO}>
							Portfolio
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
