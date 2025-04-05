import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/config/pages/public.pages'
import Link from 'next/link'

const pages = [PUBLIC_PAGES.LOGIN, PUBLIC_PAGES.CONTACT, ADMIN_PAGES.HOME]

export default function Home() {
	return (
		<div>
			<h1 className="mt-4">Home Page</h1>
			<br />
			<p>Для проверки, есть страницы:</p>
			<br />
			<ul className="space-y-2">
				{pages.map(page => (
					<li key={page}>
						<Link className="text-primary hover:underline" href={page}>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
