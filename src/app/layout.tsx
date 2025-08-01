import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'

const Montserrat_font = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: '400'
})

export const metadata: Metadata = {
	title: 'Portfolio',
	description: '3D artist portfolio page'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${Montserrat_font.className} antialiased`}>
				<Providers>
					<div className="container">
						<Header />
						<main className="flex flex-col items-center gap-6">{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
