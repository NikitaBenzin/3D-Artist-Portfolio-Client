'use server'

import { ITokenInside } from '@/types/auth.types'
import { transformUserToState } from '@/utils/transform-user-to-state'
import * as jose from 'jose'

export async function jwtVerifyServer(accessToken: string) {
	try {
		const { payload }: { payload: ITokenInside } = await jose.jwtVerify(
			accessToken,
			new TextEncoder().encode(`${process.env.JWT_SECRET}`)
		)

		return transformUserToState(payload)
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('exp claim timestamp check failed')
		) {
			console.log('Token expired')
			return null
		}

		console.log('Error while verifying token: ', error)
		return null
	}
}
