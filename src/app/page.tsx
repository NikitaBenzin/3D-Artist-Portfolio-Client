import { HomeMainScreen } from '@/components/HomeMainScreen'
import { CategorySlider } from '@/components/ui/CategorySlider'
import styles from './HomePage.module.scss'

export default function Home() {
	return (
		<>
			<HomeMainScreen />
			<section className={`${styles['categories-wrapper']} px-2 gap-4`}>
				<div className={styles['categories-heading']}>
					<h2>Categories</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit
						sint maxime labore officiis magni fugiat libero, dicta illo ut
					</p>
				</div>

				<CategorySlider />
			</section>
		</>
	)
}
