'use server'

import { type NextRequest, NextResponse } from 'next/server'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { getTokensFromRequest } from './utils/get-tokens-from-request'
import { jwtVerifyServer } from './utils/jwt-verify'
import { nextRedirect } from './utils/next-redirect'

export async function protectLoginPages(request: NextRequest) {
	const tokens = await getTokensFromRequest(request)
	if (!tokens) return NextResponse.next()

	const verifiedData = await jwtVerifyServer(tokens.accessToken)
	if (!verifiedData) return NextResponse.next()

	return nextRedirect(PUBLIC_PAGES.HOME, request.url)
}
