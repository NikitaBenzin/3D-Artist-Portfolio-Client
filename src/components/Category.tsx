import styles from './HomeMainScreen.module.scss'
import { CategorySlider } from './ui/CategorySlider'

export function Category() {
	return (
		<section className={`${styles['categories-wrapper']} px-2 gap-4 pt-6`}>
			<div className={styles['categories-heading']}>
				<h2>Categories</h2>
				<p>
					Visual storytelling through 3D art. From atmospheric environments to
					detailed game assets — I bring imagination into form. Let the renders
					speak.
				</p>
			</div>
			<CategorySlider />
		</section>
	)
}
