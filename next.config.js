/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.rescuegroups.org/**',
                port: '',
            },
        ],
    }
}

module.exports = nextConfig
