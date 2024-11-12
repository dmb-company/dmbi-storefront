/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // experimental: {
    //     ppr: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
