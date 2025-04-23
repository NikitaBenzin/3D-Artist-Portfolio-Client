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
					<p>Ready</p>
				</li>
				<li>
					<p>for Render</p>
				</li>
				<li>
					<p>Prepped</p>
				</li>
				<li>
					<p>for Play</p>
				</li>
			</ul>
		</section>
	)
}
