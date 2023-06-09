/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {

        API_ENDPOINT: process.env.API_ENDPOINT,
        PROJECT_ID: process.env.PROJECT_ID,
        DATABASE_ID: process.env.DATABASE_ID,
        COLLECTION_ID: process.env.COLLECTION_ID,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        UPSTASH_REDIS_URL: process.env.UPSTASH_REDIS_URL,
        UPSTASH_REDIS_TOKEN: process.env.UPSTASH_REDIS_TOKEN,

    },
    images: {
        domains: ['lh3.googleusercontent.com']
    }
}

module.exports = nextConfig