import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		domains: ['localhost']
	}
}

export default nextConfig
