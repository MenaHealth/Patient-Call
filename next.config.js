/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
    // Ensure that the @appbuilder/react package is transpiled
    transpilePackages: ['@appbuilder/react'],
    // Optimize image loading
    images: {
        domains: ['example.com'], // Add any domains you're loading images from
    },
    // Add any environment variables you want to expose to the browser
    env: {
        NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV,
    },
}

module.exports = nextConfig