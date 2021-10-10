const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://react-weather-app-node.herokuapp.com',
            changeOrigin: true,
        })
    );
};