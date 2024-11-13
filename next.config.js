/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // experimental: {
    //     ppr: true,
    // },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
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
