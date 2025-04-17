import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '**'
			}
		]
	}
}

export default nextConfig
