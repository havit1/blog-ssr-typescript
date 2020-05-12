const debug = process.env.NODE_ENV !== 'production';
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/ap-grid-layout': { page: '/ap-grid-layout' },
        };
    },
    assetPrefix: !debug ? 'https://havit1.github.io/blog-ssr-typescript/' : '',
};
