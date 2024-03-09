/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.rescuegroups.org/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com/**',
                port: '',
            },
        ],
    }
}

module.exports = nextConfig
