module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/acceuil',
                permanent: true,
            },
        ]
    },
}