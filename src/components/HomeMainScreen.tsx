import { Exo_2 } from 'next/font/google'
import styles from './HomeMainScreen.module.scss'

const Exo = Exo_2({
	weight: '400',
	subsets: ['latin']
})

interface Props {}

export function HomeMainScreen() {
	return (
		<section className={styles['wrapper']}>
			<ul className={`${styles['table-container']} ${Exo.className}`}>
				<li>
					<p>Innovate</p>
				</li>
				<li>
					<p>Design</p>
				</li>
				<li>
					<p className="max-w-[600px] md:text-2xl sm:text-xl text-sm">
						Your ideas, our expertise, endless dimensions, redefining spaces,
						one 3D design at a time, precision-crafted 3D designs for every
						vision
					</p>
				</li>
				<li>
					<p>Visualize 3d</p>
				</li>
			</ul>
		</section>
	)
}
