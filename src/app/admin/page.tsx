import { SocialLinksForm } from '@/components/adminPanel/SocialLinksForm/SocialLinksForm'
import { ProfileInfo } from './ProfileInfo'

export default function Page() {
	return (
		<div className="flex flex-col gap-6">
			<section>
				<ProfileInfo />
			</section>
			<section>
				{/* social links */}
				<SocialLinksForm />
			</section>
			<section>{/* posts */}</section>
			<section>{/* files */}</section>
		</div>
	)
}
