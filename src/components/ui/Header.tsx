'use client'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../HomeMainScreen.module.scss'

export function Header() {
	const pathname = usePathname()

	return (
		<header
			className={`bg-zinc-950 py-4 flex justify-center md:justify-end ${
				pathname === '/' && styles['header']
			}`}
		>
			<nav className="mx-12">
				<ul className="flex gap-6 md:gap-14">
					<li>
						<Link className="hover:underline" href={PUBLIC_PAGES.HOME}>
							Home
						</Link>
					</li>
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
