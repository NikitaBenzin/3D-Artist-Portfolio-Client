import { HomeMainScreen } from '@/components/HomeMainScreen'
import { CategorySlider } from '@/components/ui/CategorySlider'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomePage.module.scss'

export default function Home() {
	return (
		<>
			<HomeMainScreen />
			<section className={styles['categories-wrapper']}>
				<div className={styles['categories-heading']}>
					<h2>Categories</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit
						sint maxime labore officiis magni fugiat libero, dicta illo ut
					</p>
				</div>

				<ul className={styles['categories-slider']}>
					<li>
						<Link href="/">
							<div>
								<p>3D design</p>
								<p>/01</p>
							</div>
							<Image
								alt="Super natural"
								src={'/Supernatural.png'}
								width={1980}
								height={1080}
							/>
						</Link>
					</li>
					<li>
						<Link href="/">
							<div>
								<p>3D design</p>
								<p>/02</p>
							</div>
							<Image
								alt="Super natural"
								src={'/Supernatural.png'}
								width={1980}
								height={1080}
							/>
						</Link>
					</li>
					<li className={styles['slider-active']}>
						<Link href="/">
							<div>
								<p>3D design</p>
								<p>/03</p>
							</div>

							<Image
								alt="Super natural"
								src={'/Supernatural.png'}
								width={1980}
								height={1080}
							/>
						</Link>
					</li>
					<li>
						<Link href="/">
							<div>
								<p>3D design</p>
								<p>/04</p>
							</div>
							<Image
								alt="Super natural"
								src={'/Supernatural.png'}
								width={1980}
								height={1080}
							/>
						</Link>
					</li>
				</ul>
			</section>
			<CategorySlider />
		</>
	)
}
