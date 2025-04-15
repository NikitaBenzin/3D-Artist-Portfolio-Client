import { Metadata } from 'next'
import { AuthPageWrapper } from '../AuthPageWrapper'
import { AuthForm } from '../form/AuthForm'

export const metadata: Metadata = {
	title: 'Login'
}

export default function Page() {
	return (
		<AuthPageWrapper heading="Login">
			<AuthForm isLogin />
		</AuthPageWrapper>
	)
}
