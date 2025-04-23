import socialLinksService from '@/services/socialLinks.service'
import Link from 'next/link'
import {
	SiArtstation,
	SiInstagram,
	SiTelegram,
	SiYoutube
} from 'react-icons/si'

export default async function Page() {
	const { data } = await socialLinksService.getSocialLinks()

	return (
		<section className="flex flex-col items-center gap-12 mt-12 px-4 text-center">
			<h1>Get in touch with me 👋</h1>
			<ul className="flex gap-12 flex-col md:flex-row">
				{data?.map(item => (
					<li key={item.id} className="p-2 hover:scale-110 duration-300">
						<Link href={`${item.link}`} target="_blank" className="underline">
							{item.socialMedia == 'Instagram' ? (
								<SiInstagram name={`${item.socialMedia}`} size={50} />
							) : item.socialMedia == 'ArtStation' ? (
								<SiArtstation name={`${item.socialMedia}`} size={50} />
							) : item.socialMedia == 'YouTube' ? (
								<SiYoutube name={`${item.socialMedia}`} size={50} />
							) : item.socialMedia == 'Telegram' ? (
								<SiTelegram name={`${item.socialMedia}`} size={50} />
							) : (
								item.socialMedia
							)}

							{/* <SiInstagram name={`${item.socialMedia}`} size={50} /> */}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
