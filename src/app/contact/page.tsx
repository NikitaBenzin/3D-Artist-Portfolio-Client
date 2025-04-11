import {
	SiArtstation,
	SiInstagram,
	SiTelegram,
	SiYoutube
} from 'react-icons/si'

export default function Page() {
	return (
		<section className="flex flex-col items-center gap-12 mt-12 px-4 text-center">
			<h1>Get in touch with me 👋</h1>
			<ul className="flex gap-12 flex-col md:flex-row">
				<li className="p-2 hover:scale-110 duration-300">
					<a href="/">
						<SiArtstation size={50} />
					</a>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<a href="/">
						<SiTelegram size={50} />
					</a>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<a href="/">
						<SiYoutube size={50} />
					</a>
				</li>
				<li className="p-2 hover:scale-110 duration-300">
					<a href="/">
						<SiInstagram size={50} />
					</a>
				</li>
			</ul>
		</section>
	)
}
