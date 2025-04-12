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
	console.log(data)
	return (
		<section className="flex flex-col items-center gap-12 mt-12 px-4 text-center">
			<h1>Get in touch with me 👋</h1>
			<ul className="flex gap-12 flex-col md:flex-row">
				<li className="p-2 hover:scale-110 duration-300">
					<Link href={`${data.artStationLink}`} target="_blank">
						<SiArtstation size={50} />
					</Link>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<Link href={`${data.telegramLink}`} target="_blank">
						<SiTelegram size={50} />
					</Link>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<Link href={`${data.youtubeLink}`} target="_blank">
						<SiYoutube size={50} />
					</Link>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<Link href={`${data.instagramLink}`} target="_blank">
						<SiInstagram size={50} />
					</Link>
				</li>
			</ul>
		</section>
	)
}
