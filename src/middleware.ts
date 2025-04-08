import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_PAGES } from './config/pages/admin.config'
import { PUBLIC_PAGES } from './config/pages/public.config'
import { protectAdminPages } from './server-actions/middlewares/protect-admin.middleware'
import { protectLoginPages } from './server-actions/middlewares/protect-login.middleware'

export async function middleware(request: NextRequest): Promise<NextResponse> {
	const pathname = request.nextUrl.pathname

	if (pathname.startsWith(PUBLIC_PAGES.AUTH)) {
		return protectLoginPages(request)
	}

	if (pathname.startsWith(ADMIN_PAGES.HOME)) {
		return protectAdminPages(request)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path*', '/admin/:path*']
}
