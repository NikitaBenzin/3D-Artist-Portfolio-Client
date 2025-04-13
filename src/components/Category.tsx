import styles from './HomeMainScreen.module.scss'
import { CategorySlider } from './ui/CategorySlider'

export function Category() {
	return (
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
	)
}
